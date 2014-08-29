function Uploader(input, url, callback){
	
	self = this;

	self.input = input;
	self.url = url;
	self.callback = callback;

	if (input.length){
		self.files = input[0].files;
	}else{
		self.files = input.files;
	}
	
	self.post = function (){
		fd = new FormData();

		for (var i in self.files) {
			fd.append('file'+i, self.files[i]);
		};

		$.ajax({
		  type: "POST",
		  url: this.url,
		  data: fd,
		  success: function(resultString){
		  	result = JSON.parse(resultString);
		  	self.callback(result);
		  },
		  error: function(){
		  	self.callback(false);
		  }
		});

		//self.callback('Файл отправлен');
	};

	$(self.input).on('change', function(){
		self.post();
	});

};



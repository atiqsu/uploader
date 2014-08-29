Uploader = {
	ini: function(className, urlPost){
		var uploader = $('.'+className);
		uploader.each(function(index){
			self = $(this);

			$('<iframe/>', {
			    class:   'uploadframe',
			    id: 'id'+index,
			    name: 'name' +index,
			    style: 'width:0px;height:0px;border:0px'
			}).appendTo(self);

			$('<form/>',{
				target: 'name' +index,
				url: urlPost,
				type: 'POST'
			}).appendTo(self);

			var form = self.find('form');

			if (self.attr('data-multiple')=='true'){
				$('<input/>',{
					type: 'file',
					multiple: 'multiple'
				}).appendTo(form);
			}else{
				$('<input/>',{
					type: 'file'
				}).appendTo(form);
			}

			var input = form.find('input');

			self.on('click', function(){
				input.click();
			});

			input.on('change',function(){
				form.submit();
			})
		});




	},
	call: function(dataString){
		var data = JSON.parse(dataString);
		console.log(data);
	}
};

$(function () {
	Uploader.ini('uploader','upload.php');
});



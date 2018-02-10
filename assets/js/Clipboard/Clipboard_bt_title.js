
   
var clipboard = new Clipboard('h1');


clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    //alert('已複製到剪貼簿');
    //var choose = document.getElementById('show_msg').style.display = 'block';
	document.getElementById("show_msg").style.display = "block";
    e.clearSelection(); //取消選取
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
$(document).ready(function(){

if(typeof(Storage)!=="undefined")
  {
// find the highest ID of the existing notes //

$('.new_note').click( function (){
	var highest = 0, this_id;
$(".note").each( function(i,v)
{
   this_id = parseInt($(this).attr('id'));
  
   if (this_id > highest)
   {
      highest = this_id;
   }
});

var note_index = highest+1;
var myDate = new Date();
var content = 'Enter your note here';

// add note when buttton clicked //

$('#content').append("<div id="+note_index+" class=\"note\"><p class=\"title\">Mini - Note <span class=\"date\">"+datetime()+"</span></p><div class=\"note_body\" contenteditable=\"true\">"+content+"</div></div>");
$('<a href="#" class="close_note"><img src="delete.png" alt="" title="close note"></a>').appendTo('.note');

// make the notes draggable //
$(".note").draggable({ handle: "p" },{ containment: "parent" }).click(function(){
	})
});

// bring the note to the front when clicked  //

$(document).on('click', '.note', function(){
var actualnote = $(this);
actualnote.addClass('top').removeClass('bottom');
actualnote.siblings().removeClass('top').addClass('bottom');
});

// save note text on note blure //
$(document).on('blur', '.note_body', function(){
var thisnote = $(this);
var noteid = thisnote.parent().attr('id');
var contentWhenPageLoaded = thisnote.text();

localStorage.setItem( noteid+"_id", "<div id="+noteid+" class=\"note\"><p class=\"title\">Mini - Note <span class=\"date\">"+datetime()+"</span></p><div class=\"note_body\" contenteditable=\"true\">"+contentWhenPageLoaded+"</div></div>");
})



for (var key in localStorage){
stickynote = localStorage.getItem(key);
$('#content').append($(stickynote));
$(".note").draggable({ handle: "p" },{ containment: "parent" });

}

//  get date and time of note creation and modification  //
function datetime(){
var d = new Date();
var date = (d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+' - '+d.getHours()+':'+d.getMinutes());
return date;	
}

// add delete icin to each displayed note

$('<a href="#" class="close_note"><img src="delete.png" alt="" title="close note"></a>').appendTo('.note');

	
// hide the note and remove data from localstorage //

$(document).on('click', '.close_note', function(){

var id = $(this).parent().attr('id');

$('#'+id).css('visibility','hidden');

localStorage.removeItem(id+'_id');
})

$('.content').height($(document).height());

}else{
alert('Sorry! No web storage support..')
}

}) ;

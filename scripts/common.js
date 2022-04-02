
/* page refresh on orientation change === START */
$(window).on('orientationchange', function (event) 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* header Menu === start */
$("#headerMenu").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    if($(this).hasClass("open"))
    {
        $("#headerMenu").stop(true).addClass("close").removeClass("open");
        $("#mainmenu").stop(true).slideDown(500);
    }
    else 
    {
        $("#headerMenu").stop(true).addClass("open").removeClass("close");
        $("#mainmenu").stop(true).slideUp(500);
    }
    if($(window).width() < 1255)
    {
        $("#header-serch-box").slideUp(300);
    }
    else 
    {
        $("#header-serch-box").animate( { right:'-100%' } , 500);
    }
});
$("#mainmenu").click(function(e)  
{
    e.preventDefault();
    e.stopPropagation();
});
/* header Menu === end */





/* application open on header === start */
$("#headerApplication").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    $("#findmarket").focus().val('')
    $("#applicationBox").stop(true).slideToggle(300);
    $("#headerApplication").stop(true).toggleClass("active");

    if($(window).width() < 1255)
    {
        $("#header-serch-box").slideUp(300);
    }
    else 
    {
        $("#header-serch-box").animate( { right:'-100%' } , 500);
    }
});
$("#applicationBox").click(function(e) 
{
    e.preventDefault();
    e.stopPropagation();
});
/* application open on header === end */




/* search on header === start */
$("#headerSearch").click(function(e)
{
    e.preventDefault();
    e.stopPropagation();
    if($(window).width() < 1255)
    {
        $("#header-serch-box").slideDown(300);
    }
    else 
    {
        $("#header-serch-box").animate( { right:'0' } , 500);
    }
    

    
    $("#findmarket").val('');
    $("#applicationBox").slideUp(300);
    $("#headerApplication").removeClass("active");

    if($(window).width() < 1255)
    {
        $("#headerMenu").addClass("open").removeClass("close");
        $("#mainmenu").slideUp(500);
    }
});
$("#header-serch-box").click(function(e) 
{
    e.preventDefault();
    e.stopPropagation();
});
/* search on header === end */





$('body').click(function(e) // close on click body
{    
    e.stopPropagation();
    if (e.target != $('#headerApplication')  || e.target != $('#applicationBox')) 
    {
        $("#findmarket").val('');
        $("#applicationBox").slideUp(300);
        $("#headerApplication").removeClass("active");
    }

    if($(window).width() < 1255)
    {
        if (e.target != $('#headerMenu') || e.target != $('#mainmenu')) 
        {
            $("#headerMenu").addClass("open").removeClass("close");
            $("#mainmenu").slideUp(500);
        }
    }

    if (e.target != $('#headerSearch')  || e.target != $('#header-serch-box')) 
    {
        if($(window).width() < 1255)
        {
            $("#header-serch-box").slideUp(300);
        }
        else 
        {
            $("#header-serch-box").animate( { right:'-100%' } , 500);
        }
    }
});
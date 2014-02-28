// bar slide
$(window).scroll(function() {
	$('.slide').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
	});
});

//  pie, donut, graphs
var genderData = [
    {
        value: 89,
        color:"#3498db"
    },
    {
        value : 11,
        color : "#d94e27"
    } 
];
var theGenders = new Chart(document.getElementById("genders").getContext("2d")).Doughnut(genderData);

var forumAddedData = [
    {
        value: 58,
        color:"#3498db"
    },
	{
        value: 23,
        color:"#f1c40f"
    },
    {
        value : 19,
        color : "#d94e27"
    } 
];
var theForumsAdded = new Chart(document.getElementById("forumsadded").getContext("2d")).Doughnut(forumAddedData);

var forumSetupData = [
    {
        value: 48,
        color:"#9b59b6"
    },
	{
        value: 29,
        color:"#34495e"
    },
    {
        value : 23,
        color : "#16a085"
    } 
];
var theForumsSetup = new Chart(document.getElementById("forumssetup").getContext("2d")).Doughnut(forumSetupData);

var evalYesData = [
    {
        value: 67,
        color:"#3498db"
    },
	{
        value: 33,
        color:"#ecf0f1"
    }
];
var theEvalYes = new Chart(document.getElementById("evalyes").getContext("2d")).Doughnut(evalYesData);

var evalNoData = [
    {
        value: 33,
        color:"#c0392b"
    },
	{
        value: 67,
        color:"#ecf0f1"
    }
];
var theEvalNo = new Chart(document.getElementById("evalno").getContext("2d")).Doughnut(evalNoData);



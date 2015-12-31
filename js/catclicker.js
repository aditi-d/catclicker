$(function() {
	//var cat1Name = 'Oreo';
	//var cat2Name = 'Chewie';

	var catArr = [];
	var cat = function(name, pic) {
		this.name = name;
		this.pic = pic;
		this.count = 0;
	};

	function createCatList() {
		var cat1 = new cat("Oreo", "images/cat.jpg");
		var cat2 = new cat("Chewie", "images/cat2.jpg");
		var cat3 = new cat("Alana", "images/cat3.jpg");
		var cat4 = new cat("Lulu", "images/cat4.jpg");
		var cat5 = new cat("Lucy", "images/cat5.jpg");

		catArr.push(cat1);
		catArr.push(cat2);
		catArr.push(cat3);
		catArr.push(cat4);
		catArr.push(cat5);
	}

	function displayCatList(){
		var pnode = $('#catListUl');

		for(var i = 0; i < catArr.length; i++) {
			var str = "<li id='cat" + i +"'><a href='#'>" + catArr[i].name + "</a></li>";
			pnode.append(str);
		}
	}

	function mymain() {
		createCatList();
		displayCatList();
	}

	mymain();

	for (var i = 0; i < 5; i++) {
		var catid = "#cat" + i;
		$(catid).on('click', (function(copyCat) {
			return function() {
				copyCat.count++;
				alert(copyCat.name);
				$("#cat").attr("src",copyCat.pic);
				$("#displayClickCount").text(copyCat.count);
			}
		})(catArr[i]));
	};
	/*function updateCatNames() {
		$('#cat1name').text(cat1Name);
		$('#cat2name').text(cat2Name);
	}*/

	/*function incrCount(displayCntr) {
		var clickcount = $(displayCntr).text();
		clickcount = Number(clickcount) + 1;
		$(displayCntr).text(clickcount);
	}

	updateCatNames();*/

	/*$('#cat1').click(function(e) {
		incrCount("#displayClickCount1");
	});

	$('#cat2').click(function(e) {
		incrCount("#displayClickCount2");
	});*/


});
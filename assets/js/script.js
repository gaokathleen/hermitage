/* Width of each carousel image, in pixels */
let carouselWidth = 1300; 

/* Part 2.1: Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Part 2.2: Create variable to keep track of which image we're on */
let imageNum = 0;

/* Part 2.3: The showNextImage function should shift the image row to the left */
function showNextImage() {
	
	// change imageNum
	imageNum = imageNum + 1;
	// how many pixels from the left should imageRow now be?
	let moveNext = -1 * imageNum * carouselWidth;
	// change css for imageRow
	imageRow.style.left = moveNext + "px";
	checkControls();
	
}

/* Part 2.4: Change the onclick property for the next button */
nextButton.onclick = showNextImage;


/* Part 2.5: The showPrevImage function should shift the image row to the right */
function showPrevImage() {
	
	// change imageNum
	imageNum = imageNum - 1;
	// how many pixels from the left should imageRow now be?
	let moveBack = -1* carouselWidth * imageNum;
	// change css for imageRow
	imageRow.style.left = moveBack + "px";
	checkControls();
}

/* Part 2.6: Change the onclick property for the prev button */
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Part 2.7 */

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == 0) {
		// What should happen if it's the first image?
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (imageNum == totalImages - 1) {
		// What should happen it's the last image?
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
		nextButton.classList.remove("hidden");
	}
}

var container = document.getElementById('col2'); 


// // ("#chevron left").on("click", alert("HELLO"));
// // ("#chevron right").on("click", carousel("right"));

// document.getElementsByClassName("chevron right")[0].click(function() {
//   carousel("right");
// });

// function carousel(direction) {
//   let curr = document.getElementById("active");
//   let inventory = document.getElementById("inventory");
//   let children = inventory.children;
//   let num = len(children);

//   if (direction.equals("right")) {
//     if (children[num] == curr) {
//       curr.setAttribute('id', 'content');
//       children[0].setAttribute('id', 'active');
//       curr.visibility = visible;
//       children[0].visibility = hidden;
//     } else {
//       for (i in range(num - 1)) {
//         if (children[i] == curr) {
//           curr.setAttribute('id', 'content');
//           children[i + 1].setAttribute('id', 'active');
//           curr.visibility = visible;
//           children[i + 1].visibility = hidden;
//         }
//       }
//     }
//   } else {
//     if (children[0] == curr) {
//       curr.setAttribute('id', 'content');
//       children[num].setAttribute('id', 'active');
//       curr.visibility = visible;
//       children[num].visibility = hidden;
//     } else {
//       for (i in range(1, num)) {
//         if (children[i] == curr) {
//           curr.setAttribute('id', 'content');
//           children[i - 1].setAttribute('id', 'active');
//           curr.visibility = visible;
//           children[i - 1].visibility = hidden;
//         }
//       }
//     }
//   }
// }

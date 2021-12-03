"use strict"

const checkboxes = document.querySelectorAll('.ingredient-checkbox');
for (let i = 0; i < checkboxes.length; i++) {
	if(localStorage.getItem(`checkbox-${i}`) != null){
		checkboxes[i].checked = JSON.parse(localStorage.getItem(`checkbox-${i}`))
	}
	checkboxes[i].addEventListener('change', (e)=>{
		localStorage.setItem(`checkbox-${i}`, e.target.checked);
		console.log(e.target.checked, e.target.id)

	})
}

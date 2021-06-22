
//Milestone 1
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//Milestone 2
//Coloriamo le icone per tipo
//Milestone 3
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*

function filterIcons(choice, originalList){
	const newArray = originalList.filter((icon) => {
		if (choice=== 'all'){
			return true;
		}
		if (choice=== icon.type){
			return true;
		}
		return false;
	})
	return newArray
}

function listIcons(filter){

const iconsFiltered = filterIcons(filter, icons);

const containerHTML = document.querySelector('.icons-content');
containerHTML.innerHTML ='';

iconsFiltered.forEach((icon)=> {

    const {name , prefix , family , type} = icon;

    containerHTML.innerHTML +=
	`
    <div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
});
}

listIcons('all');

const selectElement = document.querySelector('.type-select');

selectElement.addEventListener('change', (event) => {
	listIcons(event.target.value);
});
*/

icons.forEach ((icon) => {

    const {name,prefix,type,family} = icon

	const containerHTML = document.querySelector('.icons-content');

    containerHTML.innerHTML += 
	`
	<div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
})
const animalsArray = icons.filter ((icons)=>{
    if(icons.type === "animal") {
        return true
    }
})
const vegetablesArray = icons.filter ((icons)=>{
    if(icons.type === "vegetable") {
        return true
    }
})
const usersArray = icons.filter ((icons)=>{
    if(icons.type === "user") {
        return true
    }
})
const usersAll= icons.filter ((icons)=>{
    if(icons.type === "all") {
        return true
    }
})


const selectElement = document.querySelector('.type-select');

selectElement.addEventListener("click", function() {

	const containerHTML = document.querySelector('.icons-content');

	containerHTML.innerHTML = "";

    if(selectElement.value === "all") {

    icons.forEach ((icon) => {

    const {name,prefix,type,family} = icon

    containerHTML.innerHTML += 
	`
	<div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
    })}

	if(selectElement.value === "animal") {

    animalsArray.forEach ((icon) => {

    const {name,prefix,type,family} = icon

    containerHTML.innerHTML +=
	 `
	<div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
    })}

    if(selectElement.value === "vegetable") {

    vegetablesArray.forEach ((icon) => {

    const {name,prefix,type,family} = icon

    containerHTML.innerHTML +=
	 `
	<div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
    })}

    if(selectElement.value === "user") {

    usersArray.forEach ((icon) => {

    const {name,prefix,type,family} = icon
        
    containerHTML.innerHTML +=
	 `
	<div class="icon-card col">
		<div class="icon-card-inner">
			<div class ="icon ${type}">
				<i class="${family} ${prefix}${name}"></i>
			</div>	
			<div class="name">
				${name}
			</div>
		</div>	
	</div>
    `
    })}
})
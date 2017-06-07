const favesList = []

function arrayInit(){
  addNew('Raindrops on Roses')
  addNew('Whiskers on Kittens')
  addNew('Bright Copper Kettles')
  const itemEntry = document.querySelector('#itemEntry')
  itemEntry.addEventListener('submit', handleSubmit)
}

function handleSubmit(ev){
  ev.preventDefault()
  const form = ev.target
  addNew(form.newItem.value)
  form.newItem.value = ''
}

function faveItem(itemName){
  this.name = itemName
  this.special = false
}

function getSpecial(ev){
  const button = (ev.target).getrelatedElement()
  const div = button.parentElement
  if(item.special){
    item.special = false
    return white
  }
  else{
    item.special = true
    return gold
  }
}

function addNew(name){
  const item = new faveItem(name)
  favesList.unshift(item)
  const special = document.createElement('button')
  special.innerHTML = 'Promote'
  const listDisplay = document.querySelector('#list-display')
  const newItem = listItems(name, special)
  listDisplay.insertBefore(newItem, listDisplay.childNodes[0])
  newItem.style.backgroundColor = special.addEventListener('click', getSpecial)
}

function listItems(item, special){
  const newItem = document.createElement('div')
  newItem.innerHTML = `${item} ${special.outerHTML}`
  return newItem
}

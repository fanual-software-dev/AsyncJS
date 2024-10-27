// Question number 1

function array_iterator(array){
    let new_array = []

    for (let element of array){
        new_array.push(element*2)

    }
    console.log(new_array)
    return new_array
}

array_iterator([1,2,3])

//  Question number 2

function object_iterator(object){
    for(let key in object){
        console.log(key,' : ',object[key])
    }
}

object_iterator({'a':1,'b':2,'c':3})

// Question number 3

function string_iterator(string){

    for (let s of string){
        setTimeout(()=>console.log(s),1000)
    }
}

string_iterator('Fanual')
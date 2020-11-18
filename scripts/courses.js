courseList = {  
                class1 : {code: 'ACIT 1620',  name: 'Fundamental Web Technologies'}, 
                class2 : {code: 'ACIT 1515',  name: 'Scripting for IT'}, 
                class3 : {code: 'ACIT 1420',  name: 'Introduction to Systems Administration'}
            }
do { 
    var x = prompt("Input course code:");
}
while(
    !(!isNaN(Number(x)) && x.length === 4)
    );

let create = true
for (i in courseList) {
    for (a in courseList[i]) {
        if (courseList[i][a] == 'ACIT '+ x) {
            console.log("Yes I am taking the course: "+courseList[i]['code'],"-", courseList[i]['name'])
            create = false
        }
    }
}

if (create == true){
    courseList['class4'] = {code: "ACIT "+x, name: null}
    console.log("Successfully added class "+courseList['class4']['code'])
}

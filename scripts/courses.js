// courseList = {  
//                 class1 : {code: 'ACIT 1620',  name: 'Fundamental Web Technologies'}, 
//                 class2 : {code: 'ACIT 1515',  name: 'Scripting for IT'}, 
//                 class3 : {code: 'ACIT 1420',  name: 'Introduction to Systems Administration'}
//             }

function createCourseArray() {
    let classnum = 1
    var element = document.getElementsByTagName("a");
    courseList = {}
    for (let i = 0; i < element.length; i += 1) {
        if (element[i].innerHTML.includes("ACIT") || element[i].innerHTML.includes("COMM") || element[i].innerHTML.includes("MATH") || element[i].innerHTML.includes("ORGB")) {
            courseList['class'+classnum] = {code: element[i].innerHTML, date: "Fall 2020"}
            classnum += 1
        }
      }
      console.log(courseList)
      return courseList
}

function findCourse(courselist){
    do { 
        var x = prompt("Input course code:");
    }
    while(
        (isNaN(Number(x)) && x.length != 4)
        );

    let create = true
    for (i in courseList) {
        for (a in courseList[i]) {
            if (courseList[i][a] === ('ACIT '+ x) || ('MATH '+ x) || ('ORGB '+ x) || ('COMM '+ x)) {
                console.log("Yes I am taking the course: "+courseList[i]['code'])
                create = false
            }
        }
    }

    if (create == true){
        courseList['class'+classnum] = {code: "ACIT "+x, name: null}
        console.log("Successfully added class "+courseList['class4']['code'])
    }
}
let courselist = createCourseArray()
findCourse(courselist)
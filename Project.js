class Student {
    constructor(studentID, name, major, unitsEnrolled, unitsWaitlisted) {
        this.studentID = studentID;
        this.name = name;
        this.major = major;
        this.unitsEnrolled = unitsEnrolled;
        this.unitsWaitlisted = unitsWaitlisted;
    }
    
    get studentID() { return this.studentID; }
    set studentID(studentID) { this.studentID = studentID; }

    get name() { return this.name; }
    set name(name) { this.name = name; }

    get major() { return this.major; }
    set major(major) { this.major = major; }

    get unitsEnrolled() { return this.unitsEnrolled; }
    set unitsEnrolled(unitsEnrolled) { this.unitsEnrolled = unitsEnrolled; }

    get unitsWaitlisted() { return this.unitsWaitlisted; }
    set unitsWaitlisted(unitsWaitlisted) { this.unitsWaitlisted = unitsWaitlisted; }
    
    findCourse(courseNumber, title) {
        return function listOfMatches() {return}
    }
    
    addToCart(sectionNumber, joinWaitlist, permissionNum) {
        if((maxEnrollmentCapacity > capacity || permissionNum == correctPermissionNum()) && units <= maxUnits) {
            return function sucessfullyAdded() {return}
        } else if (maxEnrollmentCapacity <= capacity && joinWaitlist){
            return function sucessfullyAddedWaitlist() {return}
        }else {
            return function errorFull(){return}
        }
    }

    removeFromCart(sectionNumber){
        return function sucessfullyRemoved() {return}
    }

    confirmCourse(){
        return function confirmationEmail(CourseSection) {return}
    }
}


class Course {
    constructor(courseNumber, title, units) {
        this.courseNumber = courseNumber;
        this.title = title;
        this.units = units;
    }

    get courseNumber() { return this.courseNumber; }
    set courseNumber(courseNumber) { this.courseNumber = courseNumber; }

    get title() { return this.title; }
    set title(title) { this.title = title; }

    get units() { return this.units; }
    set units(units) { this.units = units; }
}

class CourseSection {
    constructor(Course, sectionNumber, instructorName, startTime, endTime, meetingDays, roomNumber, numStudentsEnrolled, maxEnrollmentCapacity, numStudentsWaitlisted, maxWaitlistCapacity) {
        this.Course = Course;
        this.sectionNumber = sectionNumber;
        this.instructorName = instructorName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.meetingDays = meetingDays;
        this.roomNumber = roomNumber;
        this.numStudentsEnrolled = numStudentsEnrolled;
        this.maxEnrollmentCapacity = maxEnrollmentCapacity;
        this.numStudentsWaitlisted = numStudentsWaitlisted;
        this.maxWaitlistCapacity = maxWaitlistCapacity;
    }

    get Course() { return this.Course; }
    set Course(Course) { this.Course = Course; }

    get sectionNumber() { return this.sectionNumber; }
    set sectionNumber(sectionNumber) { this.sectionNumber = sectionNumber; }

    get instructorName() { return this.instructorName; }
    set instructorName(instructorName) { this.instructorName = instructorName; }

    get startTime() { return this.startTime; }
    set startTime(startTime) { this.startTime = startTime; }

    get endTime() { return this.endTime; }
    set endTime(endTime) { this.endTime = endTime; }

    get meetingDays() { return this.meetingDays; }
    set meetingDays(meetingDays) { this.meetingDays = meetingDays; }

    get roomNumber() { return this.roomNumber; }
    set roomNumber(roomNumber) { this.roomNumber = roomNumber; }

    get numStudentsEnrolled() { return this.numStudentsEnrolled; }
    set numStudentsEnrolled(numStudentsEnrolled) { this.numStudentsEnrolled = numStudentsEnrolled; }

    get maxEnrollmentCapacity() { return this.maxEnrollmentCapacity; }
    set maxEnrollmentCapacity(maxEnrollmentCapacity) { this.maxEnrollmentCapacity = maxEnrollmentCapacity; }

    get numStudentsWaitlisted() { return this.numStudentsWaitlisted; }
    set numStudentsWaitlisted(numStudentsWaitlisted) { this.numStudentsWaitlisted = numStudentsWaitlisted; }

    get maxWaitlistCapacity() { return this.maxWaitlistCapacity; }
    set maxWaitlistCapacity(maxWaitlistCapacity) { this.maxWaitlistCapacity = maxWaitlistCapacity; }
}

class CourseEnrollment {
    constructor(CourseSection, Student, grade) {
        this.CourseSection = CourseSection;
        this.Student = Student;
        this.grade = grade;
        this.waitlistPosition = waitlistPosition;
    }
    
    get CourseSection() { return this.CourseSection; }
    set CourseSection(CourseSection) { this.CourseSection = CourseSection; }

    get Student() { return this.Student; }
    set Student(Student) { this.Student = Student; }
    
    get grade() { return this.grade; }
    set grade(grade) { this.grade = grade; }

    get waitlistPosition() { return this.waitlistPosition; }
    set waitlistPosition(waitlistPosition) { this.grade = waitlistPosition; }
}
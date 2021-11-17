DROP DATABASE courseenrollment;

CREATE DATABASE courseenrollment;

USE courseenrollment;

Create TABLE student (
student_ID INT,
firstName VARCHAR(50),
lastName VARCHAR(50),
major VARCHAR(20),
PRIMARY KEY (student_ID));

Create TABLE instructor (
instructor_ID INT,
firstName VARCHAR(50),
lastName VARCHAR(50),
PRIMARY KEY (instructor_ID));

Create TABLE room (
room_ID INT,
roomNumber VARCHAR(7),
capacity INT,
PRIMARY KEY (room_ID));

Create TABLE course (
course_ID INT,
courseNumber INT,
courseName VARCHAR(50),
creditUnit INT,
PRIMARY KEY (course_ID));

Create TABLE coursesection (
section_ID INT,
course_ID INT,
room_ID INT,
instructor_ID INT,
sectionNumber INT,
classSchedule VARCHAR(25),
maxEnrolledCapacity INT,
maxWaitlistPosition INT,
FOREIGN KEY (course_ID) REFERENCES course(course_ID),
FOREIGN KEY (room_ID) REFERENCES room(room_ID),
FOREIGN KEY (instructor_ID) REFERENCES instructor(instructor_ID),
PRIMARY KEY (section_ID, course_ID, room_ID, instructor_ID));

Create TABLE courseenrollment (
section_ID INT,
student_ID INT,
grade VARCHAR(2),
FOREIGN KEY (section_ID) REFERENCES coursesection(section_ID),
FOREIGN KEY (student_ID) REFERENCES student(student_ID));

Create TABLE shoppingcart (
section_ID INT,
student_ID INT,
unitsEnrolled INT,
unitsWaitlisted INT,
FOREIGN KEY (section_ID) REFERENCES coursesection(section_ID),
FOREIGN KEY (student_ID) REFERENCES student(student_ID));



INSERT INTO student VALUES
	(1, 'Phillip', 'Dang', 'Computer Science'),
	(2, 'Daniel', 'Phung', 'Computer Science'),
	(3, 'Nathan', 'Pham', 'Computer Science'),
	(4, 'Andrew', 'Vu', 'Computer Science'),
    (5, 'Yi', 'Huang', 'Computer Science');


INSERT INTO instructor VALUES
	(1, 'Markus', 'Smith'),
	(2, 'David', 'Thomas'),
	(3, 'Lily', 'Huffman');
    
    
INSERT INTO room VALUES
	(1, '8 222', 30),
	(2, '8 111', 35),
	(3, '8 333', 20),
	(4, '6 111', 20),
    (5, '6 222', 30);
    
INSERT INTO course VALUES
    (1, 1300, 'Discrete Structures', 4),
    (2, 3010, 'Numerical Methods and Computing', 3),
    (3, 3560, 'Object-Oriented Design and Programming', 3);

INSERT INTO coursesection VALUES
	(1, 1, 1, 1, 1300, 'MWF 11:00AM - 12:15PM', 30, 20),
    (2, 2, 1, 2, 3010, 'TTh 9:00AM - 11:15AM', 30, 20);
    
INSERT INTO courseenrollment VALUES
	(1, 1, 'A-'),
    (2, 1, 'A+'),
    (1, 2, 'B-'),
    (1, 3, 'C'),
    (1, 4, 'B+');
    
INSERT INTO shoppingcart VALUES
	(1, 1, 8, 8);

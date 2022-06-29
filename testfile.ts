function gradeGenerator(grade) {
    if (grade < 60) {
        return 'f';
    } else if (grade >= 60 && grade < 70) {
        return 'd';
    } else if (grade >= 70 && grade < 80) {
        return 'c';
    } else if (grade >= 80 && grade < 90) {
        return 'b';
    } else {
        return 'a';
    }
}

gradeGenerator(20)
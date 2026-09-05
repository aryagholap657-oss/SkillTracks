var app = angular.module("skillTrackApp", []);

app.controller("MainController", function ($scope) {

    // Default Section
    $scope.section = "dashboard";

    // Student Profile
    $scope.student = {
        name: "Student Name",
        email: "",
        phone: "",
        course: "Computer Science",
        year: "Third Year"
    };

    // Skills
    $scope.skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "AngularJS"
    ];

    // Courses
    $scope.courses = [
        "Web Development",
        "Database Management"
    ];

    // Course Progress
    $scope.courseProgress = [60, 40];

    // Internships
    $scope.internships = [
        "Web Development Internship"
    ];

    // Internship Status
    $scope.internshipStatus = ["Applied"];

    // Projects
    $scope.projects = [
        "Student Management System",
        "Smart Classroom Alert System"
    ];


    // Navigation
    $scope.showSection = function (section) {
        $scope.section = section;
    };


    // Add Skill
    $scope.addSkill = function () {
        if ($scope.newSkill && $scope.newSkill.trim() !== "") {
            $scope.skills.push($scope.newSkill.trim());
            $scope.newSkill = "";
        }
    };


    // Delete Skill
    $scope.deleteSkill = function (index) {
        $scope.skills.splice(index, 1);
    };


    // Add Course
    $scope.addCourse = function () {
        if ($scope.newCourse && $scope.newCourse.trim() !== "") {
            $scope.courses.push($scope.newCourse.trim());
            $scope.courseProgress.push(0);
            $scope.newCourse = "";
        }
    };


    // Delete Course
    $scope.deleteCourse = function (index) {
        $scope.courses.splice(index, 1);
        $scope.courseProgress.splice(index, 1);
    };


    // Add Internship
    $scope.addInternship = function () {
        if ($scope.newInternship && $scope.newInternship.trim() !== "") {

            $scope.internships.push($scope.newInternship.trim());

            $scope.internshipStatus.push("Applied");

            $scope.newInternship = "";
        }
    };


    // Delete Internship
    $scope.deleteInternship = function (index) {
        $scope.internships.splice(index, 1);
        $scope.internshipStatus.splice(index, 1);
    };


    // Add Project
    $scope.addProject = function () {
        if ($scope.newProject && $scope.newProject.trim() !== "") {
            $scope.projects.push($scope.newProject.trim());
            $scope.newProject = "";
        }
    };


    // Delete Project
    $scope.deleteProject = function (index) {
        $scope.projects.splice(index, 1);
    };


    // Save Profile
    $scope.saveProfile = function () {
        alert("Profile saved successfully! ✅");
    };


    // Save All Data
    $scope.saveData = function () {

        var data = {
            student: $scope.student,
            skills: $scope.skills,
            courses: $scope.courses,
            courseProgress: $scope.courseProgress,
            internships: $scope.internships,
            internshipStatus: $scope.internshipStatus,
            projects: $scope.projects
        };

        localStorage.setItem("skillTrackData", JSON.stringify(data));

        alert("All data saved successfully! ✅");
    };


    // Load Saved Data
    $scope.loadData = function () {

        var savedData = localStorage.getItem("skillTrackData");

        if (savedData) {

            var data = JSON.parse(savedData);

            $scope.student = data.student || $scope.student;
            $scope.skills = data.skills || $scope.skills;
            $scope.courses = data.courses || $scope.courses;
            $scope.courseProgress = data.courseProgress || $scope.courseProgress;
            $scope.internships = data.internships || $scope.internships;
            $scope.internshipStatus = data.internshipStatus || $scope.internshipStatus;
            $scope.projects = data.projects || $scope.projects;
        }
    };


    // Load data when website starts
    $scope.loadData();

});
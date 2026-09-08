// =========================================================
// SKILLTRACK - ANGULARJS APPLICATION
// Service + Controller + Forms + LocalStorage
// =========================================================


// ================= MODULE =================

var app = angular.module("skillTrackApp", []);


// =========================================================
// SERVICE
// =========================================================

app.service("SkillTrackService", function () {

    var storageKey = "skillTrackData";


    // Save all data
    this.saveData = function (data) {

        localStorage.setItem(
            storageKey,
            JSON.stringify(data)
        );

    };


    // Load all data
    this.loadData = function () {

        var savedData = localStorage.getItem(storageKey);

        if (savedData) {
            return JSON.parse(savedData);
        }

        return null;
    };

});


// =========================================================
// CONTROLLER
// =========================================================

app.controller("MainController", function (
    $scope,
    SkillTrackService
) {


    // =====================================================
    // CURRENT SECTION
    // =====================================================

    $scope.section = "dashboard";


    // =====================================================
    // STUDENT PROFILE
    // =====================================================

    $scope.student = {

        name: "Student Name",

        email: "",

        phone: "",

        course: "Computer Science",

        year: "Third Year"

    };


    // =====================================================
    // SKILLS
    // =====================================================

    $scope.skills = [

        "HTML",

        "CSS",

        "JavaScript",

        "AngularJS"

    ];


    // =====================================================
    // COURSES
    // =====================================================

    $scope.courses = [

        "Web Development",

        "Database Management"

    ];


    // Course progress

    $scope.courseProgress = [

        60,

        40

    ];


    // =====================================================
    // INTERNSHIPS
    // =====================================================

    $scope.internships = [

        "Web Development Internship"

    ];


    $scope.internshipStatus = [

        "Applied"

    ];


    // =====================================================
    // PROJECTS
    // =====================================================

    $scope.projects = [

        "Student Management System",

        "Smart Classroom Alert System"

    ];


    // =====================================================
    // SEARCH VARIABLES
    // =====================================================

    $scope.skillSearch = "";

    $scope.courseSearch = "";

    $scope.internshipSearch = "";


    // =====================================================
    // NEW ITEM VARIABLES
    // =====================================================

    $scope.newSkill = "";

    $scope.newCourse = "";

    $scope.newInternship = "";

    $scope.newProject = "";


    // =====================================================
    // NAVIGATION
    // =====================================================

    $scope.showSection = function (section) {

        $scope.section = section;

    };


    // =====================================================
    // ADD SKILL
    // =====================================================

    $scope.addSkill = function () {

        if (
            $scope.newSkill &&
            $scope.newSkill.trim() !== ""
        ) {

            $scope.skills.push(
                $scope.newSkill.trim()
            );

            $scope.newSkill = "";

        }

    };


    // =====================================================
    // DELETE SKILL
    // =====================================================

    $scope.deleteSkill = function (index) {

        $scope.skills.splice(index, 1);

    };


    // =====================================================
    // ADD COURSE
    // =====================================================

    $scope.addCourse = function () {

        if (
            $scope.newCourse &&
            $scope.newCourse.trim() !== ""
        ) {

            $scope.courses.push(
                $scope.newCourse.trim()
            );

            $scope.courseProgress.push(0);

            $scope.newCourse = "";

        }

    };


    // =====================================================
    // DELETE COURSE
    // =====================================================

    $scope.deleteCourse = function (index) {

        $scope.courses.splice(index, 1);

        $scope.courseProgress.splice(index, 1);

    };


    // =====================================================
    // ADD INTERNSHIP
    // =====================================================

    $scope.addInternship = function () {

        if (
            $scope.newInternship &&
            $scope.newInternship.trim() !== ""
        ) {

            $scope.internships.push(
                $scope.newInternship.trim()
            );

            $scope.internshipStatus.push(
                "Applied"
            );

            $scope.newInternship = "";

        }

    };


    // =====================================================
    // DELETE INTERNSHIP
    // =====================================================

    $scope.deleteInternship = function (index) {

        $scope.internships.splice(index, 1);

        $scope.internshipStatus.splice(index, 1);

    };


    // =====================================================
    // ADD PROJECT
    // =====================================================

    $scope.addProject = function () {

        if (
            $scope.newProject &&
            $scope.newProject.trim() !== ""
        ) {

            $scope.projects.push(
                $scope.newProject.trim()
            );

            $scope.newProject = "";

        }

    };


    // =====================================================
    // DELETE PROJECT
    // =====================================================

    $scope.deleteProject = function (index) {

        $scope.projects.splice(index, 1);

    };


    // =====================================================
    // SAVE PROFILE
    // =====================================================

    $scope.saveProfile = function () {

        $scope.saveData();

        alert("Profile saved successfully!");

    };


    // =====================================================
    // SAVE ALL DATA
    // =====================================================

    $scope.saveData = function () {

        var data = {

            student: $scope.student,

            skills: $scope.skills,

            courses: $scope.courses,

            courseProgress: $scope.courseProgress,

            internships: $scope.internships,

            internshipStatus:
                $scope.internshipStatus,

            projects: $scope.projects

        };


        SkillTrackService.saveData(data);

        alert("All data saved successfully!");

    };


    // =====================================================
    // LOAD DATA
    // =====================================================

    $scope.loadData = function () {

        var data =
            SkillTrackService.loadData();


        if (data) {

            if (data.student) {

                $scope.student =
                    data.student;

            }


            if (data.skills) {

                $scope.skills =
                    data.skills;

            }


            if (data.courses) {

                $scope.courses =
                    data.courses;

            }


            if (data.courseProgress) {

                $scope.courseProgress =
                    data.courseProgress;

            }


            if (data.internships) {

                $scope.internships =
                    data.internships;

            }


            if (data.internshipStatus) {

                $scope.internshipStatus =
                    data.internshipStatus;

            }


            if (data.projects) {

                $scope.projects =
                    data.projects;

            }

        }

    };


    // =====================================================
    // LOAD SAVED DATA WHEN APPLICATION STARTS
    // =====================================================

    $scope.loadData();


});
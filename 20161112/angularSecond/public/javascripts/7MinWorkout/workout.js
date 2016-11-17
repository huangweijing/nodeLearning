angular.module('7minWorkout').cohntroller('WorkoutController',
        function($scope){
            var restExercise;
            var workoutPlan;
            var init = function() {
                startWorkout();
            }
            init();
        });

var startWorkout = function (){
    workoutPlan = createWorkout();
    restExercise = {
        details: new Exercise({
            name: "rest",
            title: " Relax!",
            description: " Relax a bit!",
            image: "img/rest.png",
        }),
        duration: workoutPlan.restBetweenExercise
    };
    startExercise(workoutPlan.exercises.shift());
};

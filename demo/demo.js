$(document).ready(function () {

    //$('#experience').html(experienceCalculator());
    const carrierStarted = new Date(2011, 10);
    const now = new Date();
    const exp = moment.duration(moment(now).diff(moment(carrierStarted)));
    console.log(moment.duration(moment(now).diff(moment(carrierStarted))));
    console.log(moment.duration(moment(now).diff(moment(carrierStarted))).subtract(7,'months'));
    $('#experience').html(''+exp);

    $('#experience').html(experienceCalculator());

    /* ======= DEMO THEME CONFIG ====== */
    $('#config-trigger').click(function (e) {

        e.preventDefault();

        if ($(this).hasClass('config-panel-open')) {
            $("#config-panel").animate({
                right: "-=170" //same as the panel width
            }, 500);
            $(this).removeClass('config-panel-open').addClass('config-panel-hide');
        }
        else {
            $("#config-panel").animate({
                right: "+=170" //same as the panel width
            }, 500);
            $(this).removeClass('config-panel-hide').addClass('config-panel-open');
        }
    });

    $('#config-close').on('click', function (e) {
        e.preventDefault();
        $('#config-trigger').click();
    });


    $('#color-options a').on('click', function (e) {
        var $styleSheet = $(this).attr('data-style');

        $('#theme-style').attr('href', $styleSheet);

        var $listItem = $(this).closest('li');
        $listItem.addClass('active');
        $listItem.siblings().removeClass('active');

        e.preventDefault();

    });


});


function experienceCalculator() {
    const carrierStarted = new Date(2011, 10);
    //extract the year, month, and date from your carrier started
    const carrierStartedYear = carrierStarted.getYear();
    const carrierStartedMonth = carrierStarted.getMonth();
    const carrierStartedDate = carrierStarted.getDate();

    //get the current date from the system
    const now = new Date();
    //extract the year, month, and date from current date
    const currentYear = now.getYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();

    //declare a variable to collect the age in year, month, and days
    let experience = {};
    let yearExperience = 0;
    let monthExperience = 0;
    let dateExperience = 0;
    let experienceString = '';

    //get years
    yearExperience = currentYear - carrierStartedYear;

    //get months
    if (currentMonth >= carrierStartedMonth) {
        monthExperience = currentMonth - carrierStartedMonth;
    } else {
        yearExperience--;
        monthExperience = 12 + currentMonth - carrierStartedMonth;
    }

    //get days
    if (currentDate >= carrierStartedDate)
        //get days when the current date is greater
        dateExperience = currentDate - carrierStartedDate;
    else {
        monthExperience--;
        dateExperience = 31 + currentDate - carrierStartedDate;

        if (monthExperience < 0) {
            monthExperience = 11;
            yearExperience--;
        }
    }
    //group the experience in a single variable

    if (monthExperience >= 10) {
        monthExperience = monthExperience - 10;
    } else {
        yearExperience--;
        monthExperience = 12 + monthExperience - 10;
    }

    experience = {
        years: yearExperience,
        months: monthExperience,
        days: dateExperience
    };

    /*
    if ((experience.years > 0) && (experience.months > 0) && (experience.days > 0)) {
        experienceString = experience.years + "." + experience.months + " Yrs.";
    } else if ((experience.years > 0) && (experience.months == 0) && (experience.days == 0)) {
        experienceString = experience.years + " Yrs.";
    } else if ((experience.years > 0) && (experience.months > 0) && (experience.days == 0)) {
        experienceString = experience.years + "." + experience.months + " Yrs.";
    } else if ((experience.years > 0) && (experience.months == 0) && (experience.days > 0)) {
        experienceString = experience.years + " Yrs.";
    }
    */

    if ((experience.years > 0) && (experience.months > 0) && (experience.days > 0)) {
        experienceString = experience.years + "." + experience.months + " Yrs.";
    } else if ((experience.years == 0) && (experience.months == 0) && (experience.days > 0)) {
        experienceString = "Only " + experience.days + " days old!";
        //when current month and date is same as birth date and month
    } else if ((experience.years > 0) && (experience.months == 0) && (experience.days == 0)) {
        experienceString = experience.years + " Yrs.";
    } else if ((experience.years > 0) && (experience.months > 0) && (experience.days == 0)) {
        experienceString = experience.years + "." + experience.months + " Yrs.";
    } else if ((experience.years == 0) && (experience.months > 0) && (experience.days > 0)) {
        experienceString = experience.months + " months and " + experience.days + " days old.";
    } else if ((experience.years > 0) && (experience.months == 0) && (experience.days > 0)) {
        experienceString = experience.years + " Yrs.";
    } else if ((experience.years == 0) && (experience.months > 0) && (experience.days == 0)) {
        experienceString = experience.months + " months old.";
        //when current date is same as dob(date of birth)
    } else { experienceString = "Welcome to Earth! <br> It's first day on Earth!"; }

    return experienceString;
}
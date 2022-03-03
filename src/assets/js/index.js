import '../scss/main.scss';
import 'jquery-nice-select';

$('.sidebar__user-header').click(function () {
    $(this).parent('.sidebar__user').toggleClass('sidebar__user_open');
});

$('.sidebar__list-link_dropdown').click(function () {
    $(this).parent('.sidebar__list-item').toggleClass('sidebar__list-item_open');
});

$('.filters__title').click(function () {
    $(this).toggleClass('filters__title_open');
});

$('.burger').click(function () {
    $('body').toggleClass('open-nav');
});

$('#selection_all').change(function () {
    var checkboxes = $('.select-tr');
    checkboxes.prop('checked', $(this).is(':checked'));
});

$('select').niceSelect();

$('.login__form-forget').click(function () {
    $('body').addClass('call-open');
});

$('.modal-password__button').click(function () {
    $('body').removeClass('call-open');
});

$('.backdrop').click(function () {
    $('body').removeClass('call-open');
});
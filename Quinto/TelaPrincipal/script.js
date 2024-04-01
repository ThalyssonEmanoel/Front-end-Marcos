document.getElementById('b1').addEventListener('click', function() {
    document.querySelector('.slide1').style.display = 'block';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector('.slide3').style.display = 'none';
    document.querySelector('.slide4').style.display = 'none';
});

document.getElementById('b2').addEventListener('click', function() {
    document.querySelector('.slide1').style.display = 'none';
    document.querySelector('.slide2').style.display = 'block';
    document.querySelector('.slide3').style.display = 'none';
    document.querySelector('.slide4').style.display = 'none';
});

document.getElementById('b3').addEventListener('click', function() {
    document.querySelector('.slide1').style.display = 'none';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector('.slide3').style.display = 'block';
    document.querySelector('.slide4').style.display = 'none';
});

document.getElementById('b4').addEventListener('click', function() {
    document.querySelector('.slide1').style.display = 'none';
    document.querySelector('.slide2').style.display = 'none';
    document.querySelector('.slide3').style.display = 'none';
    document.querySelector('.slide4').style.display = 'block';
});


//scroll button
document.getElementById('scrollbtn').addEventListener('click', function(){
  document.getElementById('seatbooking').scrollIntoView({behavior:'smooth'});
});




document.getElementById('discount-sec').classList.add('hidden');

const seats = document.querySelectorAll('.seats');
let count = [];
const ticketPrice = 550;
const seatsRemaining = 40;

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        
        if(count.length > 0 ){
            for(let i = 0 ; i < count.length ; i++) {
                if (count[i] === seat.childNodes[0].innerText) {
                    return;
                }
            }
        }

        if (count.length >= 4) {
            alert('You cannot buy more than 4 seats');
            return;
        }

        seat.style.backgroundColor = '#1DD100';
        seat.style.color = 'white';
        seat.childNodes[0].classList.remove('opacity-50');
        
        const seatName = seat.childNodes[0].innerText;
        // console.log(seatName);
        count.push(seatName);
        // console.log(count);
        

        document.getElementById('seat-count').innerText = count.length;

        const span = document.createElement('span');
        span.innerText = seatName;
        const span2 = document.createElement('span');
        span2.innerText = ticketPrice;
        const span3 = document.createElement('span');
        span3.innerText = 'Economy';
        const li = document.createElement('li');
        li.appendChild(span);
        li.appendChild(span3);
        li.appendChild(span2);
        document.getElementById('seats-details').appendChild(li);

        document.getElementById('seats-details').classList.add('list-border');

        let min = document.getElementById('total-price').innerText = ticketPrice * count.length;

        document.getElementById('grand-total').innerText = ticketPrice * count.length;

        document.getElementById('seat-remaining').innerText = seatsRemaining - count.length;

        if (min !== 0) {
           document.getElementById('btn-coupon').disabled = false;
           document.getElementById('modal').disabled = false;

        }
    });
}


const coupon1 = 'NEW15'
const coupon2 = 'Couple 20'
 
    document.getElementById('btn-coupon').addEventListener('click', function couponCalculation() {
        let coupon = document.getElementById('coupon');
        let couponValue = coupon.value;
        if (couponValue.length === 0) {
            return;
        }
        if (couponValue.trim() === coupon1) {
            const discount = document.getElementById('total-price').innerText * 0.15;
            document.getElementById('grand-total').innerText = document.getElementById('total-price').innerText - discount;
            // console.log(discount);
            coupon.value = '';
            document.getElementById('coupon-sec').classList.add('hidden');
            document.getElementById('discount-sec').classList.remove('hidden');
            document.getElementById('discount-price').innerText = discount;
    
        }
        else if (couponValue.trim() === coupon2) {
            const discount = document.getElementById('total-price').innerText * 0.20;
            document.getElementById('grand-total').innerText = document.getElementById('total-price').innerText - discount;
            // console.log(discount);
            coupon.value = '';
            document.getElementById('coupon-sec').classList.add('hidden');
            document.getElementById('discount-sec').classList.remove('hidden');
            document.getElementById('discount-price').innerText = discount;
    
        } else {
            alert('Please type a valid coupon');
            coupon.value = '';
        }
    })
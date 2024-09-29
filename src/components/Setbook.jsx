import React, { useState, useEffect } from 'react';
import './style.css'; // Import your CSS here

const Setbook = () => {
    const [seats, setSeats] = useState([]);
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        // Generate 59 seats with random booking status
        const generatedSeats = Array.from({ length: 59 }, (_, i) => {
            const isBooked = Math.random() < 0.5; // 50% chance
            return { id: `s${i + 2}`, booked: isBooked, selected: false };
        });
        setSeats(generatedSeats);
    }, []);

    const handleSeatChange = (seatId) => {
        setSeats((prevSeats) =>
            prevSeats.map((seat) =>
                seat.id === seatId ? { ...seat, selected: !seat.selected } : seat
            )
        );

        // Update count and amount
        const seat = seats.find(seat => seat.id === seatId);
        if (seat && !seat.booked) {
            if (!seat.selected) {
                setCount((prevCount) => prevCount + 1);
                setAmount((prevAmount) => prevAmount + 200); // Assuming each ticket costs 200
            } else {
                setCount((prevCount) => prevCount - 1);
                setAmount((prevAmount) => prevAmount - 200); // Adjust the total amount accordingly
            }
        }
    };

    const handleBuyNow = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        // Reset the booking
        setSeats(seats.map(seat => ({ ...seat, selected: false })));
        setCount(0);
        setAmount(0);
        setPopupVisible(false);
    };

    return (
        <div className="center  bg-green-100 mx-11">
            <div className="tickets">
                <div className="ticket-selector">
                    <div className="head">
                        <div className="title">Movie Name</div>
                    </div>
                    <div className="seats">
                        <div className="status">
                            <div className="item">Available</div>
                            <div className="item">Booked</div>
                            <div className="item">Selected</div>
                        </div>
                        <div className="all-seats">
                            {seats.map((seat) => (
                                <div key={seat.id}>
                                    <input
                                        type="checkbox"
                                        id={seat.id}
                                        disabled={seat.booked}
                                        checked={seat.selected}
                                        onChange={() => handleSeatChange(seat.id)}
                                    />
                                    <label htmlFor={seat.id} className={`seat ${seat.booked ? 'booked' : ''}`}></label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="timings">
                        <div className="dates">
                            <input type="radio" name="date" id="d1" defaultChecked />
                            <label htmlFor="d1" className="dates-item">
                                <div className="day">Sun</div>
                                <div className="date">11</div>
                            </label>
                            <input type="radio" id="d2" name="date" />
                            <label htmlFor="d2" className="dates-item">
                                <div className="day">Mon</div>
                                <div className="date">12</div>
                            </label>
                            <input type="radio" id="d3" name="date" />
                            <label htmlFor="d3" className="dates-item">
                                <div className="day">Tue</div>
                                <div className="date">13</div>
                            </label>
                            <input type="radio" id="d4" name="date" />
                            <label htmlFor="d4" className="dates-item">
                                <div className="day">Wed</div>
                                <div className="date">14</div>
                            </label>
                            <input type="radio" id="d5" name="date" />
                            <label htmlFor="d5" className="dates-item">
                                <div className="day">Thu</div>
                                <div className="date">15</div>
                            </label>
                            <input type="radio" id="d6" name="date" />
                            <label htmlFor="d6" className="dates-item">
                                <div className="day">Fri</div>
                                <div className="date">16</div>
                            </label>
                            <input type="radio" id="d7" name="date" />
                            <label htmlFor="d7" className="dates-item">
                                <div className="day">Sat</div>
                                <div className="date">17</div>
                            </label>
                        </div>
                        <div className="times">
                            <input type="radio" name="time" id="t1" defaultChecked />
                            <label htmlFor="t1" className="time">11:00</label>
                            <input type="radio" id="t2" name="time" />
                            <label htmlFor="t2" className="time">14:30</label>
                            <input type="radio" id="t3" name="time" />
                            <label htmlFor="t3" className="time">18:00</label>
                            <input type="radio" id="t4" name="time" />
                            <label htmlFor="t4" className="time">21:30</label>
                        </div>
                    </div>
                </div>
                <div className="price">
                    <div className="total">
                        <span><span className="count">{count}</span> Tickets</span>
                        <div className="amount">{amount}</div>
                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Pay here</h3>
                            <span><span className="count">{count}</span> Tickets</span>
                        <div className="amount">{amount}</div>
                            <div className="pay w-70 h-70 m-3 "><img src="src/assets/pay.png" alt="" srcset="" /></div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={() => document.getElementById('my_modal_6').showModal()}>Done</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Booking success full</h3>
                           
                        <div className="amount">Thank For Booking</div>
                            
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" >Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                 
            </div>
        </div>
      
    );
};

export default Setbook;

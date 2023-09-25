import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center py-5" style={{backgroundColor: '#1d2634'}}>
      <div className="w-full md:w-10/12 lg:w-8/12 xl:w-5/12">
        <div className="rounded-lg bg-white shadow-md">
          <div className="px-4 py-4">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold">Settings</h3>
              <h6 className="text-sm">Payment</h6>
            </div>
            <p className="font-semibold mb-4 pb-2">Saved cards:</p>
            <div className="flex flex-row items-center mb-4 pb-1">
              <img
                className="w-10 h-10 object-contain"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                alt="Mastercard"
              />
              <div className="flex-grow mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    size="lg"
                    value="**** **** **** 3193"
                  />
                </div>
              </div>
              <a href="#!" className="text-blue-500 hover:underline">
                Remove card
              </a>
            </div>
            <div className="flex flex-row items-center mb-4 pb-1">
              <img
                className="w-10 h-10 object-contain"
                src="https://img.icons8.com/color/48/000000/visa.png"
                alt="Visa"
              />
              <div className="flex-grow mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form2"
                    type="text"
                    size="lg"
                    value="**** **** **** 4296"
                  />
                </div>
              </div>
              <a href="#!" className="text-blue-500 hover:underline">
                Remove card
              </a>
            </div>
            <p className="font-semibold mb-4">Add new card:</p>
            <MDBInput
              label="Cardholder's Name"
              id="form3"
              type="text"
              size="lg"
              value="Anna Doe"
            />
            <MDBRow className="my-4">
              <MDBCol size="7">
                <MDBInput
                  label="Card Number"
                  id="form4"
                  type="text"
                  size="lg"
                  value="1234 5678 1234 5678"
                />
              </MDBCol>
              <MDBCol size="3">
                <MDBInput
                  label="Expire"
                  id="form5"
                  type="password"
                  size="lg"
                  placeholder="MM/YYYY"
                />
              </MDBCol>
              <MDBCol size="2">
                <MDBInput
                  label="CVV"
                  id="form6"
                  type="password"
                  size="lg"
                  placeholder="CVV"
                />
              </MDBCol>
            </MDBRow>
            <MDBBtn
              color="success"
              size="lg"
              className="w-full hover:bg-green-700"
              onClick={ () => {
      window.location.href = "/";
              }}
            >
              Payment
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

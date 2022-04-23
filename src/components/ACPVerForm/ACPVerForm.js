import React, { useState, useRef } from 'react'
import { Multiselect } from 'multiselect-react-dropdown'
import avfStyle from './Styles/ACPVerForm.module.css'
function ACPVerForm() {
  const [active, setActive] = useState(true);
  const selectRef = useRef('');
  // the below useRef is used for alternative id type 
  const disabledRef = useRef('');
  const selectChange = () => {
    const selectValue = selectRef.current.value;
    if (selectValue === 'No') {
      setActive(true);
      // alternative id type is disabled 
      // disabledRef.current.setAttribute("disabled", true)
    }
    else {
      setActive(false)
      // alternative id type is enablerd
      disabledRef.current.removeAttribute("disabled", true)
    }
  }
  // Other Gov ID 
  const [visible, setVisible] = useState(false)
  // const disabledRef = useRef('');
  const govidChnage = () => {
    const selectValue2 = disabledRef.current.value;
    if (selectValue2 === 'Other Gov ID') {
      setVisible(true);
    }
    else {
      setVisible(false)
    }
  }
  // MULTIPLE SELECT 

  return (
    <form action="">
      <div className={avfStyle.container}>
        <header>Subscribers Data</header>
        <p class="px-5 fs-3">Personal Data</p>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Middle Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Middle Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Suffix (Optional)</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Suffix (Optional)" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Date Of Birth</label>
              <input type="date" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        </div>
        {/* <p class="px-5 fs-3">SIM Data</p> */}
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">SSN (Last 4 Digits)</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="SSN " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Tribal ID (If Any)</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tribal ID " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID</label>
              <select onChange={selectChange} class="form-select" aria-label="Default select example" ref={selectRef}>
                <option selected value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Type</label>
              <select onChange={govidChnage} class="form-select" aria-label="Select Tabs" ref={disabledRef}>
                <option selected>Select Type</option>
                <option value="Driver Licence">Driver Licence</option>
                <option value="Military ID">Military ID</option>
                <option value="Passport">Passport</option>
                <option value="Taxpayer ID">Taxpayer ID</option>
                <option value="Other Gov ID">Other Gov ID</option>
              </select>
            </div>
          </div>
        </div>
        {visible &&
          <div class="input-group mb-3 px-5">
            <span class="input-group-text" id="inputGroup-sizing-default">Other Gov ID</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        }
        {/* START  */}
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Screenshot Page 01</label>
              <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Alternative ID Screenshot Page 02</label>
              <input type="file" class="form-control" id="exampleFormControlInput1" />
            </div>
          </div>
        </div>
        <p class="px-5 fs-3">Contact Data</p>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Email</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=" Email" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Address" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact State</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="State" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Zip Code</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Zip" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact Urben code </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Urben code" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> Temporary Address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Address" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Tribal Lands</label>
              <select class="form-select" aria-label="Default select example">
                <option selected value="Select">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Mailing Address</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Address" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Mailing City </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="City" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Mailing State</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" State " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> Mailing Zip Code </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Zip" />
            </div>
          </div>
        </div>
        <p class="px-5 fs-3"> Benefit Qualifying Person</p>
        <div class="row px-5">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Qualifying Through Dependent</label>
              <select class="form-select" aria-label="Default select example">
                <option selected value="Select">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">BQP First Name  </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">BQP Middle Name </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Middle Name " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">  BQP Last Name </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" Last Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> BQP Suffix</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Suffix" />
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Date Of Birth  </label>
              <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">BQP SSN (Last 4 Digits) </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" 4 Digits " />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> BQP Tribal ID </label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" ID" />
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"> BQP Alternative ID</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ID" />
            </div>
          </div>
        </div>
        <p class="px-5 fs-3">Eligible Program</p>
        <div class="row px-5">
          <div class="col-12 col-md-6">
            <div class="mb-3">
              <input class="form-check-input" type="checkbox" value="E1" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E1 (Medicaid)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E2" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E2 (Supplemental Nutrition Assistance Program (SNAP)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3">
              <input class="form-check-input" type="checkbox" value="E3" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E3 (Supplemental Security)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3">
              <input class="form-check-input" type="checkbox" value="E4" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E4 (Federal Public Housing Assistance)
              </label>
            </div>
          </div>  <div class="col-12 col-md-6">
            <div class="mb-3">
              {/* <input class="form-check-input" type="checkbox" value="E5" id="flexCheckDefault" /> */}
              <input class="form-check-input" type="checkbox" value="E5" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E8 (Bureau of Indian Affairs General Assistance)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E6" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E9 (Tribal Temporary Assistance for Needy Families (Tribal TANF)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E7" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E10 (Food Distribution Program on Indian Reservations (FDPIR)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E8" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E11 (Head Start )
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E9" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E13 (Eligibility Based on Income )
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E10" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E15 (Veterans Pension or Survivors Pension)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E11" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E50 (School Lunch/Breakfast Program)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E12" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E51 (Federal Pell Grant)
              </label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="mb-3 d-flex">
              <input class="form-check-input" type="checkbox" value="E13" />
              <label class="form-check-label ms-1" for="flexCheckDefault">
                E54 (Special Supplemental Nutrition Program for Women, Infants, and Children (WIC)
              </label>
            </div>
          </div>
        </div>
        <div class="row px-5">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"> Signature </label>
            <input type="file" class="form-control" id="exampleFormControlInput1" />
          </div>
        </div>
        <div class="form-check ms-4 mb-3 px-5">
          <input class="form-check-input required" type="checkbox" value="" />
          <label class="form-check-label" for="defaultCheck1">
            Consumer has provided their consent to share their PII for purposes of applying and/or receiving the Affordable Connectivity Program benefit.
          </label>
        </div>
        <div class="col-12 text-center">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </div>
    </form >
  )
}
export default ACPVerForm
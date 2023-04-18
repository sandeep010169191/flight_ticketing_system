import React from 'react'

const Membership = () => {
  return (
    <>


      <div class="card-body">
        <h5 class="card-title">Gold Plan</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Benefits</h6>
        <p class="card-text">1. 25% off on alll flight bookings.</p>
        <p class="card-text">2. Free Lounge access</p>

      </div>
      <div class="card-body">
        <h5 class="card-title">Silver Plan</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Benefits</h6>
        <p class="card-text">1. 15% off on alll flight bookings.</p>
        <p class="card-text">2. Free Lounge access(upto 2)</p>

      </div>


      <div><form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <select class="form-select" aria-label="Default select example">
          <option selected>Check Plans Here</option>
          <option value="1">Gold</option>
          <option value="2">Silver</option>

        </select>
        <button type="submit" class="btn btn-primary my-2">Submit</button>
      </form></div>
    </>
  )
}

export default Membership
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import eye from "../../assets/img/Color.png";
import * as Yup from "yup";

export default function Register() {
  const dispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      repassword:'',
      gender: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      name:Yup.string().required("Tên không được để trống"),
      phone:Yup.string().required("Số điện thoại không được bỏ trống"),
      password: Yup.string().required("Mật khẩu không được để trống"),
      repassword:Yup.string().when("password", {
        is: val => (val && val.length >0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Xác nhận không khớp với mật khẩu đã nhập"
        )
      })


    }),
  });
  

  return (
    <section className="register">
      <div className="container">
        <h1>Register</h1>
        <hr />
        <form
          role="form"
          id="formRegister"
          className="form d-flex flex-wrap justify-content-between"
        >
          <div className="form-group col-md-10 h-100 mb-4">
            <div className="input-group d-flex flex-column">
              <h2>Email</h2>
              <input
                type="email"
                name="email"
                id="emailClient"
                className="form-control input-sm w-100"
                placeholder="Email"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.email ? (
                <span className="text-danger">{frm.errors.email} </span>
              ) : (
                ""
              )}
            </div>
            
          </div>
          <div className="form-group col-md-10 h-100 mb-4">
            <div className="input-group d-flex flex-column">
              <h2>Name</h2>
              <input
                type="text"
                name="name"
                id="nameClient"
                className="form-control input-sm w-100"
                placeholder="Name"
                required
                pattern="[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.name ? (
                <span className="text-danger">{frm.errors.name} </span>
              ) : (
                ""
              )}
            </div>
            
          </div>
          <div className="form-group col-md-10 h-100 mb-4">
            <div className="input-group d-flex flex-column">
              <h2>Password</h2>
              <input
                type="password"
                name="pw"
                id="passClient"
                className="form-control input-sm w-100"
                placeholder="Password"
                required
                pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.errors.password ? (
                <span className="text-danger">{frm.errors.password} </span>
              ) : (
                ""
              )}
              <button>
                <img src={eye} alt="icon" />
              </button>
            </div>
            <span className="sp-inform" id="infPass" />
          </div>
          <div className="form-group col-md-10 h-100 mb-4">
            <div className="input-group d-flex flex-column">
              <h2>Phone</h2>
              <input
                type="tel"
                name="tel"
                id="phoneClient"
                className="form-control input-sm w-100"
                placeholder="Phone"
                required
                pattern="^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$"
              />
            </div>
            <span className="sp-inform" id="infPhone" />
          </div>
          <div className="form-group col-md-10 h-100 mb-4">
            <div className="input-group d-flex flex-column">
              <h2>Password confirm</h2>
              <input
                type="password"
                name="pw"
                id="passConfirm"
                className="form-control input-sm w-100"
                placeholder="Password Confirm"
                required
              />
              <button>
                <img src={eye} alt="icon" />
              </button>
            </div>
            <span className="sp-inform" id="infPassConfirm" />
          </div>
          <div className="form-group col-md-10 mt-4">
            <div className="input-group" id="gender">
              <p>Gender</p>
              <input type="radio" id="Male" name="Choose" defaultValue="true" />
              <label htmlFor="Male" className="radio-label">
                Male
              </label>
              <input
                type="radio"
                id="Female"
                name="Choose"
                defaultValue="false"
              />
              <label htmlFor="Female" className="radio-label">
                Female
              </label>
            </div>
            <span className="sp-inform" id="infSelect" />
          </div>
          <div className="submit">
            <button type="submit" id="signUp">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

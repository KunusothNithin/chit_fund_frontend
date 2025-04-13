import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    aadhar: "",
    pan: "",
    bankAccount: "",
    ifsc: "",
    nomineeName: "",
    nomineeRelation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};

    // First Name and Last Name: Required, alphabets only
    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[A-Za-z]+$/.test(form.firstName.trim())) {
      newErrors.firstName = "First name must contain only letters.";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[A-Za-z]+$/.test(form.lastName.trim())) {
      newErrors.lastName = "Last name must contain only letters.";
    }

    // Email: Required, valid format
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email address.";
    }

    // Password: Required, min 8 chars, at least one uppercase, one lowercase, one number, one special character
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

    // Aadhar: Optional, if provided must be 12 digits
    if (form.aadhar && !/^\d{12}$/.test(form.aadhar)) {
      newErrors.aadhar = "Aadhar number must be 12 digits.";
    }

    // PAN: Optional, if provided must match format
    if (form.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan)) {
      newErrors.pan = "Invalid PAN number format.";
    }

    // Bank Account: Optional, if provided must be digits between 9 to 18
    if (form.bankAccount && !/^\d{9,18}$/.test(form.bankAccount)) {
      newErrors.bankAccount =
        "Bank account number must be between 9 to 18 digits.";
    }

    // IFSC: Optional, if provided must match format
    if (form.ifsc && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(form.ifsc)) {
      newErrors.ifsc = "Invalid IFSC code format.";
    }

    // Nominee Name: Optional, if provided must be alphabets and spaces
    if (
      form.nomineeName &&
      !/^[A-Za-z\s]+$/.test(form.nomineeName.trim())
    ) {
      newErrors.nomineeName = "Nominee name must contain only letters and spaces.";
    }

    // Nominee Relation: Optional, if provided must be alphabets and spaces
    if (
      form.nomineeRelation &&
      !/^[A-Za-z\s]+$/.test(form.nomineeRelation.trim())
    ) {
      newErrors.nomineeRelation = "Nominee relation must contain only letters and spaces.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Proceed with form submission (e.g., send data to server)
      console.log("Form submitted successfully:", form);
      // Reset form if needed
      // setForm({ ... }); // Reset form fields
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-green-700">Create Your Account</h1>
        <p className="text-center text-blue-600 mt-2 mb-6">Join the community and start your chit fund journey!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
  {/* First Name and Last Name */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* First Name Input */}
  <div>
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={form.firstName}
      onChange={handleChange}
      className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
  </div>

  {/* Last Name Input */}
  <div>
    <input
      type="text"
      name="lastName"
      placeholder="Last Name"
      value={form.lastName}
      onChange={handleChange}
      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      required
    />
    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
  </div>
</div>


  {/* Email */}
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
      className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      required
    />
    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
  </div>

  {/* Password */}
  <div>
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={form.password}
      onChange={handleChange}
      className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
      required
    />
    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
  </div>

  {/* Aadhar and PAN */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <input
        type="text"
        name="aadhar"
        placeholder="Aadhar Number"
        value={form.aadhar}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      {errors.aadhar && <p className="text-red-500 text-sm mt-1">{errors.aadhar}</p>}
    </div>
    <div>
      <input
        type="text"
        name="pan"
        placeholder="PAN Number"
        value={form.pan}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      {errors.pan && <p className="text-red-500 text-sm mt-1">{errors.pan}</p>}
    </div>
  </div>

  {/* Bank Account and IFSC Code */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <input
        type="text"
        name="bankAccount"
        placeholder="Bank Account Number"
        value={form.bankAccount}
        onChange={handleChange}
        className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
    </div>
    <div>
      <input
        type="text"
        name="ifsc"
        placeholder="IFSC Code"
        value={form.ifsc}
        onChange={handleChange}
        className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      {errors.ifsc && <p className="text-red-500 text-sm mt-1">{errors.ifsc}</p>}
    </div>
  </div>

  {/* Nominee Name and Relation */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <input
        type="text"
        name="nomineeName"
        placeholder="Nominee Name"
        value={form.nomineeName}
        onChange={handleChange}
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {errors.nomineeName && <p className="text-red-500 text-sm mt-1">{errors.nomineeName}</p>}
    </div>
    <div>
      <input
        type="text"
        name="nomineeRelation"
        placeholder="Nominee Relation"
        value={form.nomineeRelation}
        onChange={handleChange}
        className="w-full p-3 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      {errors.nomineeRelation && <p className="text-red-500 text-sm mt-1">{errors.nomineeRelation}</p>}
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
    >
      Sign Up
    </button>
  </div>
</form>
</div>
    </div>
  );
}

export default Signup;
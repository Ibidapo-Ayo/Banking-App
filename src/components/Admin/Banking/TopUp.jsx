import React from "react";

function TopUp() {
  const url = "https://topups-sandbox.reloadly.com/topups";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/com.reloadly.topups-v1+json",
      Authorization:"eyJraWQiOiI1N2JjZjNhNy01YmYwLTQ1M2QtODQ0Mi03ODhlMTA4OWI3MDIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNTI5NCIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHktc2FuZGJveC5hdXRoMC5jb20vIiwiaHR0cHM6Ly9yZWxvYWRseS5jb20vc2FuZGJveCI6dHJ1ZSwiaHR0cHM6Ly9yZWxvYWRseS5jb20vcHJlcGFpZFVzZXJJZCI6IjE1Mjk0IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIiwiYXVkIjoiaHR0cHM6Ly90b3B1cHMtaHMyNTYtc2FuZGJveC5yZWxvYWRseS5jb20iLCJuYmYiOjE2NzcwMzU3MzksImF6cCI6IjE1Mjk0Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE2NzcxMjIxMzksImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6Ijg0NmFkMWM2LWIwNmUtNDhmYy1hYTFlLTE3MDdmZjExMGNkOCIsImlhdCI6MTY3NzAzNTczOSwianRpIjoiMWZjOGY1NDEtODZhNy00OGM3LTkzOGQtNmIzNGI0NWI1MjhhIn0.oyTsbdCOgDb39V2Q4DrtZgmeEbFVU5J7vG3KOkP_LRg",
    },
    body: JSON.stringify({
      operatorId: "535",
      amount: "5.00",
      useLocalAmount: true,
      customIdentifier: "This is example identifier 130",
      recipientEmail: "peter@nauta.com.cu",
      recipientPhone: { countryCode: "NG", number: "447951731337" },
      senderPhone: { countryCode: "NG", number: "11231231231" }
    })
  };

  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error("error:" + err));
  return(
<div>
    <div className="w-[280px] h-[220px] bg-gray-100 flex flex-col rounded-[5px] px-3 py-3">
      <h3 className="text-[20px] font-semibold">One time mobile Top up</h3>
      <p className="text-[13px]">
        You can top up your mobile number following the steps
      </p>
      <input
        type="text"
        placeholder="Enter mobile number"
        className="mt-3 border-purple-100"
      />
      <button className="bg-purple-100 p-3 w-[150px] rounded-[5px] mx-auto text-white mt-5 mb-4">
        Top up
      </button>
    </div>
  </div>
  )
  
}

export default TopUp;

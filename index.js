const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Facebook UID API Running",
    author: "TARIF"
  });
});


// UID Finder
app.get("/uid", async (req, res) => {
  try {

    const input = req.query.user;

    if (!input) {
      return res.json({
        status: false,
        message: "Give Facebook username or profile link"
      });
    }


    // Facebook ID extract method
    let url = input;

    if (!url.startsWith("http")) {
      url = "https://www.facebook.com/" + url;
    }


    const response = await axios.get(url, {
      headers: {
        "User-Agent":
        "Mozilla/5.0"
      }
    });


    const html = response.data;


    let uid =
    html.match(/"userID":"(\d+)"/);


    if (!uid) {
      uid =
      html.match(/profile_id=(\d+)/);
    }


    if (uid) {

      return res.json({
        status:true,
        uid: uid[1],
        profile: input
      });

    }


    res.json({
      status:false,
      message:"UID not found"
    });


  } catch(e){

    res.json({
      status:false,
      error:e.message
    });

  }

});


app.listen(PORT,()=>{
 console.log(
 `Server running on ${PORT}`
 );
});

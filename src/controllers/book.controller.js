exports.add = (request, response) => {
  response.cookie('username', 'john_doe', { maxAge: 900000, httpOnly: true });//XSRF
  response.cookie('mycookie', 'Pariwesh');//XSRF
  response.status(200).send("Public Content.");
  console.log('cookies coming from pm', request.cookies);
  ;
};

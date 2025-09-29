# cts-capstone
25-sept
Add Books: Authenticated users can add books (title, author, genre, year, description)

29-sept:
# to use cookies
npm install express cookie-parser

Cookies are pieces of data exchanged between a web server and a client (such as a web browser) to maintain stateful information across stateless HTTP requests. While RESTful APIs are designed to be stateless, cookies can still be used in conjunction with them for specific purposes, primarily related to user authentication and session management.
Common uses of cookies in REST:
# Authentication and Authorization: (not used nowadays)
After a user successfully authenticates with a REST API (e.g., by providing credentials), the server might issue a session cookie containing a session ID or authentication token.
This cookie is then sent by the client with subsequent requests, allowing the server to identify the authenticated user and grant access to protected resources.
This approach is common in cookie-based authentication systems like those used by some web applications with REST APIs.
# Session Management: (not anymore)
Cookies can be used to maintain a user's session state on the client-side, even though the REST API itself remains stateless.
For example, a cookie might store user preferences, language settings, or items in a shopping cart, allowing the client to send this information with each request without requiring the server to maintain that state.
Considerations when using cookies with REST:
Statelessness: While cookies introduce a form of client-side state, the REST API itself should ideally remain stateless. This means the server should not rely on cookies to store application-specific state that is critical for processing requests.
Security: Cookies can be vulnerable to security attacks like Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF). Appropriate security measures (e.g., HttpOnly and Secure flags for cookies, CSRF tokens) should be implemented.
Alternatives: For authentication in REST APIs, alternatives like JSON Web Tokens (JWTs) passed in Authorization headers are often preferred due to their stateless nature and ease of use in distributed systems. However, even JWTs are sometimes stored in HttpOnly cookies for enhanced security against XSS.
Privacy: Cookies raise privacy concerns as they can be used to track user behavior across websites. Developers should be mindful of privacy implications and comply with relevant regulations.

HTTPOnly cookies are cookies that have the HttpOnly flag, which prevents client-side scripts, like JavaScript, from accessing or modifying them. This significantly reduces the risk of cross-site scripting (XSS) attacks, where malicious scripts are injected into a website to steal sensitive cookie data. Instead, these cookies are only accessible by the server, making them ideal for storing authentication credentials and maintaining user sessions securely.  


#API documentation
npm install --save-dev swagger-ui-express

mysql installer: https://drive.google.com/file/d/1mTgOmrlMFclpBtp2zYnpd5CJb39DXZUl/view?usp=sharing

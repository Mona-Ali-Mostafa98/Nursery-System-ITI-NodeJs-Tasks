/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           required: true
 *           minLength: 2
 *           maxLength: 50
 *           pattern: ^[a-zA-Z0-9_]+$
 *           description: The username of the teacher.
 *         fullname:
 *           type: string
 *           required: true
 *           minLength: 2
 *           description: The full name of the teacher.
 *         email:
 *           type: string
 *           format: email
 *           required: true
 *           description: The email address of the teacher.
 *         image:
 *           type: string
 *           format: binary
 *           required: true
 *           description: teacher's profile image.
 *         password:
 *           type: string
 *           format: password
 *           required: true
 *           minLength: 8
 *           description: The password of the teacher.
 *
 *       required:
 *         - username
 *         - fullname
 *         - email
 *         - image
 *         - password
 *
 *     TeacherUpdated:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique _id of the teacher.
 *         username:
 *           type: string
 *           required: true
 *           minLength: 2
 *           maxLength: 50
 *           pattern: ^[a-zA-Z0-9_]+$
 *           description: The username of the teacher.
 *         fullname:
 *           type: string
 *           required: true
 *           minLength: 2
 *           description: The full name of the teacher.
 *         email:
 *           type: string
 *           format: email
 *           required: true
 *           description: The email address of the teacher.
 *         image:
 *           type: string
 *           format: binary
 *           required: true
 *           description: teacher's profile image.
 *         password:
 *           type: string
 *           format: password
 *           required: true
 *           minLength: 8
 *           description: The password of the teacher.
 *
 *       required:
 *         - _id
 *
 *     Child:
 *       type: object
 *       properties:
 *         _id:
 *           type: number
 *           description: The unique identifier of the child.
 *         username:
 *           type: string
 *           required: true
 *           minLength: 2
 *           maxLength: 50
 *           pattern: ^[a-zA-Z0-9_]+$
 *           description: The username of the child.
 *         fullname:
 *           type: string
 *           required: true
 *           minLength: 2
 *           description: The full name of the child.
 *         age:
 *           type: number
 *           required: true
 *           description: The age of the child.
 *         level:
 *           type: string
 *           enum: ["PreKG", "KG1", "KG2"]
 *           description: The level of the child.
 *         'address[city]':
 *           type: string
 *           description: The city of the child's address.
 *         'address[street]':
 *           type: string
 *           description: The street of the child's address.
 *         'address[building]':
 *           type: string
 *           description: The building of the child's address.
 *         email:
 *           type: string
 *           format: email
 *           required: true
 *           description: The email address of the child.
 *         image:
 *           type: string
 *           format: binary
 *           required: true
 *           description: child's profile image.
 *         password:
 *           type: string
 *           format: password
 *           required: true
 *           minLength: 8
 *           description: The password of the child.
 *
 *       required:
 *         - username
 *         - fullname
 *         - age
 *         - level
 *         - 'address[city]'
 *         - 'address[street]'
 *         - 'address[building]'
 *         - email
 *         - password
 *         - image
 *
 *     ChildUpdated:
 *       type: object
 *       properties:
 *         _id:
 *           type: number
 *           description: The unique identifier of the child.
 *         username:
 *           type: string
 *           required: true
 *           minLength: 2
 *           maxLength: 50
 *           pattern: ^[a-zA-Z0-9_]+$
 *           description: The username of the child.
 *         fullname:
 *           type: string
 *           required: true
 *           minLength: 2
 *           description: The full name of the child.
 *         age:
 *           type: number
 *           required: true
 *           description: The age of the child.
 *         level:
 *           type: string
 *           enum: ["PreKG", "KG1", "KG2"]
 *           description: The level of the child.
 *         'address[city]':
 *           type: string
 *           description: The city of the child's address.
 *         'address[street]':
 *           type: string
 *           description: The street of the child's address.
 *         'address[building]':
 *           type: string
 *           description: The building of the child's address.
 *         email:
 *           type: string
 *           format: email
 *           required: true
 *           description: The email address of the child.
 *         image:
 *           type: string
 *           format: binary
 *           required: true
 *           description: child's profile image.
 *         password:
 *           type: string
 *           format: password
 *           required: true
 *           minLength: 8
 *           description: The password of the child.
 *
 *       required:
 *         - _id
 *
 *     Class:
 *       type: object
 *       properties:
 *         _id:
 *           type: number
 *           description: The unique identifier of the class.
 *         name:
 *           type: string
 *           required: true
 *           unique: true
 *           minLength: 2
 *           trim: true
 *           description: The name of the class.
 *         supervisor:
 *           type: string
 *           format: ObjectId
 *           description: The ID of the teacher who supervises the class.
 *         children:
 *           type: array
 *           items:
 *             type: number
 *             format: ObjectId
 *           description: The IDs of the children in the class.
 *
 *       required:
 *            - name
 *            - supervisor
 *            - children
 *
 *
 *     RegisterAsTeacherResponse:
 *       type: object
 *       properties:
 *         teacher:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *               format: ObjectId
 *               description: The unique identifier of the new teacher.
 *             username:
 *               type: string
 *               description: The username of the new teacher.
 *             fullname:
 *               type: string
 *               description: The full name of the new teacher.
 *             email:
 *               type: string
 *               format: email
 *               description: The email address of the new teacher.
 *             image:
 *               type: string
 *               format: binary
 *               description: URL of the new teacher's profile image.
 *             role:
 *               type: string
 *               description: The role of the new teacher (always "teacher").
 *             __v:
 *               type: integer
 *               description: Version of the new teacher document.
 *         token:
 *           type: string
 *           description: JWT token for authenticated user.
 *         message:
 *           type: string
 *           description: Confirmation message.
 *
 */

/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Operations related to user authentication
 *   - name: Teacher
 *     description: Operations related to Teachers
 *   - name: Child
 *     description: Operations related to Childes
 *   - name: Class
 *     description: Operations related to Classes
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login (Teacher or Childes Login)
 *     description: Authenticate user using email and password.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password of the user.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated user.
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *       401:
 *         description: Unauthorized. Incorrect email or password.
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Add a new teacher
 *     description: Add a new teacher to the system. Only admins are allowed to perform this action.
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *        multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Teacher added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacher:
 *                   $ref: '#/components/schemas/RegisterAsTeacherResponse'
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 */

/**
 * @swagger
 * /change-password:
 *     patch:
 *       summary: Change Password for any user Teacher or Child
 *       description: Change the password of a user.
 *       tags: [Authentication]
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                 currentPassword:
 *                   type: string
 *                   description: The current password of the user.
 *                 newPassword:
 *                   type: string
 *                   description: The new password to set.
 *                 confirmPassword:
 *                   type: string
 *                   description: Confirmation of the new password.
 *
 *               required:
 *                  - _id
 *                  - currentPassword
 *                  - newPassword
 *                  - confirmPassword
 *
 *       responses:
 *         '200':
 *           description: Password changed successfully.
 *         '400':
 *           description: Invalid request data or password change failed.
 *         '401':
 *           description: Unauthorized. Missing or invalid authorization token.
 */

/********************* Start Of Teachers Routes **********************/
/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Get all teachers
 *     description: Returns a list of all teachers.
 *     tags: [Teacher]
 *     security:
 *         - bearerAuth: []
 *     responses:
 *       200:
 *         description: Teachers List Retrieved Successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: No teachers found.
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 */

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Add a new teacher
 *     description: Add a new teacher to the system. Only admins are allowed to perform this action.
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       200:
 *         description: Teacher added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacher:
 *                   $ref: '#/components/schemas/Teacher'
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 */

/**
 * @swagger
 * /teachers:
 *   patch:
 *     summary: Update a teacher
 *     description: Updates the details of a teacher.
 *     tags: [Teacher]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *             $ref: '#/components/schemas/TeacherUpdated'
 *         application/json:
 *          schema:
 *             $ref: '#/components/schemas/TeacherUpdated'
 *     responses:
 *       200:
 *         description: Teacher updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacher:
 *                   $ref: '#/components/schemas/Teacher'
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *       401:
 *         description: Unauthorized. User is not logged in.
 *       404:
 *         description: Teacher not exists.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /teachers/{teacherId}:
 *   get:
 *     summary: Get a teacher by ID
 *     description: Returns the details of a teacher by ID.
 *     tags: [Teacher]
 *     security:
 *         - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the teacher to retrieve.
 *     responses:
 *       200:
 *         description: Successful response containing the details of the teacher.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teacher:
 *                   $ref: '#/components/schemas/Teacher'
 *       404:
 *         description: Teacher not exists.
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /teachers/{teacherId}:
 *   delete:
 *     summary: Delete a teacher by ID
 *     description: Deletes a teacher from the system by ID.
 *     tags: [Teacher]
 *     security:
 *         - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the teacher to delete.
 *     responses:
 *       200:
 *         description: Teacher deleted successfully.
 *       404:
 *         description: Teacher not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /teachers/supervisors:
 *   get:
 *     summary: Get all class supervisors
 *     description: Retrieve a list of all class supervisors.
 *     security:
 *       - bearerAuth: []
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: Successful operation. Returns a list of class supervisors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       500:
 *         description: Internal server error.
 */
/********************* End Of Teachers Routes **********************/

/********************* Start Of Childs Routes **********************/
/**
 * @swagger
 * /childs:
 *   get:
 *     summary: Get all children
 *     description: Returns a list of all children.
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Child retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Child'
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /childs:
 *   post:
 *     summary: Add a new child
 *     description: Add a new child to the system. Only admins are allowed to perform this action.
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *             $ref: '#/components/schemas/Child'
 *     responses:
 *       200:
 *         description: Child added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 child:
 *                   $ref: '#/components/schemas/Child'
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 */

/**
 * @swagger
 * /childs:
 *   patch:
 *     summary: Update a child
 *     description: Updates the details of a child.
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *          schema:
 *             $ref: '#/components/schemas/ChildUpdated'
 *         application/json:
 *          schema:
 *             $ref: '#/components/schemas/ChildUpdated'
 *     responses:
 *       200:
 *         description: Child updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 child:
 *                   $ref: '#/components/schemas/Child'
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *       401:
 *         description: Unauthorized. User is not logged in.
 *       404:
 *         description: Child not exists.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /childs/{id}:
 *   get:
 *     summary: Get a child by ID
 *     description: Returns the details of a child by ID.
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the child to retrieve.
 *     responses:
 *       200:
 *         description: Successful response containing the details of the child.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 *       404:
 *         description: Child not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /childs/{id}:
 *   delete:
 *     summary: Delete a child by ID
 *     description: Deletes a child from the system by ID.
 *     tags: [Child]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the child to delete.
 *     responses:
 *       200:
 *         description: Child deleted successfully.
 *       401:
 *         description: Unauthorized. User is not logged in as an admin.
 *       403:
 *         description: Forbidden. User does not have permission to perform this action.
 *       404:
 *         description: Child not found.
 *       500:
 *         description: Internal server error.
 */
/********************* End Of Childs Routes **********************/

/********************* Start Of Classes Routes **********************/
/**
 * @swagger
 * /classes:
 *   get:
 *     summary: Get all classes
 *     description: Retrieve a list of all classes.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     responses:
 *       200:
 *         description: Successful operation. Returns a list of classes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes:
 *   post:
 *     summary: Add a new class
 *     description: Add a new class to the system.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class added successfully.
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes:
 *   patch:
 *     summary: Update a class
 *     description: Update an existing class in the system.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200:
 *         description: Class updated successfully.
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes/child/{id}:
 *   get:
 *     summary: Get all class children
 *     description: Retrieve childes exists in specific class.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation. Returns childes exists in class.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       404:
 *         description: Class not exists.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes/teacher/{id}:
 *   get:
 *     summary: Get class supervisor info
 *     description: Retrieve information about teacher supervised specific class.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation. Returns class supervisor info.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       404:
 *         description: Class not exists.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes/{id}:
 *   get:
 *     summary: Get class by ID
 *     description: Retrieve details of a class by its ID.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation. Returns details of the class.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       404:
 *         description: Class not exists.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /classes:
 *   delete:
 *     summary: Delete class by ID
 *     description: Delete a class from the system by its ID.
 *     security:
 *       - bearerAuth: []
 *     tags: [Class]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Class deleted successfully.
 *       401:
 *          description: Unauthorized. User is not logged in as an admin.
 *       404:
 *         description: Class not found.
 *       500:
 *         description: Internal server error.
 */
/********************* End Of Classes Routes **********************/

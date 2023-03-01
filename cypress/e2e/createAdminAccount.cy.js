describe('Verify error message display when creating admin account with registered email', () => {
    it('Pre-condition & Steps', () => {
      
      //Pre-condition
      cy.visit('http://stag.balance.ari.com.vn/#/auth/login')
      cy.get('#email').type('admin_balan@getnada.com')
      cy.get('#password').type('Ari123456#')
      cy.get('#submit-btn').click()

      //Click 'Quản lý người dùng'
      cy.get('span').contains('Quản lý người dùng').click()
      cy.get('p').contains('Người dùng').should('have.text', 'Người dùng')

      //Click 'Thêm quản trị viên' button
      cy.get('button').contains('Thêm quản trị viên').click()
      cy.get('p').contains('Thêm người dùng').should('have.text', 'Thêm người dùng')

      //Enter Username, Email, Phone number, Note
      cy.get('#name').type('Nguyễn Văn A')
      cy.get('#email').type('nguyenvana@getnada.com')
      cy.get('#phoneNumber').type('0378887773')
      cy.get('#note').type('Tạo tài khoản admin')

      //Click 'Lưu thông tin' button
      cy.get('#deleteBtn').click()

      //Assert the error message
      cy.get('#swal2-html-container').should('have.text', 'Email đã được đăng ký trước đó.')
      
    })

    

   
})
// Enhanced script for smooth scrolling, form handling, and mobile menu
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll event listener for header styling
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form submission handler
    const form = document.getElementById('contact-form-element');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, this would send an email to info@assuredai.io
            // For now, we'll simulate a successful submission
            
            // Construct email body (this would be sent server-side in production)
            const emailBody = `
                Name: ${name}
                Email: ${email}
                Company: ${company}
                Interest: ${interest}
                Message: ${message}
            `;
            
            console.log("Form submitted with data:", emailBody);
            
            // Show success message
            const formContainer = document.getElementById('contact-form');
            formContainer.innerHTML = `
                <div class="success-message">
                    <h4>Thank you for your interest!</h4>
                    <p>We've received your information and will be in touch soon.</p>
                    <p>A copy of your submission has been sent to ${email}.</p>
                </div>
            `;
            
            // In production, you would use a server-side script or service like FormSubmit.co:
            /*
            form.action = "https://formsubmit.co/info@assuredai.io";
            form.method = "POST";
            
            // Add hidden fields for FormSubmit configuration
            const formSubmitConfig = document.createElement('input');
            formSubmitConfig.type = 'hidden';
            formSubmitConfig.name = '_next';
            formSubmitConfig.value = window.location.href; // Redirect back to this page
            form.appendChild(formSubmitConfig);
            
            const formSubmitSubject = document.createElement('input');
            formSubmitSubject.type = 'hidden';
            formSubmitSubject.name = '_subject';
            formSubmitSubject.value = 'New AssuredAI Website Inquiry';
            form.appendChild(formSubmitSubject);
            
            // Submit the form
            form.submit();
            */
        });
    }

    // Add animation classes on scroll
    const animateElements = document.querySelectorAll('.section-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

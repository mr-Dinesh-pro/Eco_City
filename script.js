// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Schedule Form
    const scheduleForm = document.getElementById('scheduleForm');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                address: document.getElementById('address').value,
                date: document.getElementById('date').value,
                wasteType: document.getElementById('wasteType').value
            };
            
            // Here you would typically send the data to a server
            console.log('Schedule Form Data:', formData);
            
            // Show success message
            alert('Thank you! Your waste pickup has been scheduled. We will contact you shortly.');
            scheduleForm.reset();
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                message: contactForm.querySelector('textarea').value
            };
            
            // Here you would typically send the data to a server
            console.log('Contact Form Data:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Authority Login
    const authorityLoginForm = document.getElementById('authorityLoginForm');
    if (authorityLoginForm) {
        authorityLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('authorityEmail').value;
            const password = document.getElementById('authorityPassword').value;
            
            // Here you would typically send the data to your server
            console.log('Authority Login:', { email, password });
            
            // Show success message
            alert('Authority login successful!');
            bootstrap.Modal.getInstance(document.getElementById('authorityLoginModal')).hide();
            authorityLoginForm.reset();
        });
    }

    // Citizen Login
    const citizenLoginForm = document.getElementById('citizenLoginForm');
    if (citizenLoginForm) {
        citizenLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('citizenEmail').value;
            const password = document.getElementById('citizenPassword').value;
            
            // Here you would typically send the data to your server
            console.log('Citizen Login:', { email, password });
            
            // Show success message
            alert('Citizen login successful!');
            bootstrap.Modal.getInstance(document.getElementById('citizenLoginModal')).hide();
            citizenLoginForm.reset();
        });
    }

    // Worker Login
    const workerLoginForm = document.getElementById('workerLoginForm');
    if (workerLoginForm) {
        workerLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('workerEmail').value;
            const password = document.getElementById('workerPassword').value;
            
            // Here you would typically send the data to your server
            console.log('Worker Login:', { email, password });
            
            // Show success message
            alert('Worker login successful!');
            bootstrap.Modal.getInstance(document.getElementById('workerLoginModal')).hide();
            workerLoginForm.reset();
        });
    }

    // Authority Signup
    const authoritySignupForm = document.getElementById('authoritySignupForm');
    if (authoritySignupForm) {
        authoritySignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('authoritySignupPassword').value;
            const confirmPassword = document.getElementById('authoritySignupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            const formData = {
                name: document.getElementById('authoritySignupName').value,
                email: document.getElementById('authoritySignupEmail').value,
                password: password,
                department: document.getElementById('authoritySignupDepartment').value,
                position: document.getElementById('authoritySignupPosition').value
            };
            
            // Here you would typically send the data to your server
            console.log('Authority Signup:', formData);
            
            // Show success message
            alert('Authority account created successfully! Please login.');
            bootstrap.Modal.getInstance(document.getElementById('authoritySignupModal')).hide();
            authoritySignupForm.reset();
        });
    }

    // Citizen Signup
    const citizenSignupForm = document.getElementById('citizenSignupForm');
    if (citizenSignupForm) {
        citizenSignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('citizenSignupPassword').value;
            const confirmPassword = document.getElementById('citizenSignupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            const formData = {
                name: document.getElementById('citizenSignupName').value,
                email: document.getElementById('citizenSignupEmail').value,
                password: password,
                address: document.getElementById('citizenSignupAddress').value,
                phone: document.getElementById('citizenSignupPhone').value
            };
            
            // Here you would typically send the data to your server
            console.log('Citizen Signup:', formData);
            
            // Show success message
            alert('Citizen account created successfully! Please login.');
            bootstrap.Modal.getInstance(document.getElementById('citizenSignupModal')).hide();
            citizenSignupForm.reset();
        });
    }

    // Worker Signup
    const workerSignupForm = document.getElementById('workerSignupForm');
    if (workerSignupForm) {
        workerSignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const password = document.getElementById('workerSignupPassword').value;
            const confirmPassword = document.getElementById('workerSignupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            const formData = {
                name: document.getElementById('workerSignupName').value,
                email: document.getElementById('workerSignupEmail').value,
                password: password,
                role: document.getElementById('workerSignupRole').value,
                experience: document.getElementById('workerSignupExperience').value
            };
            
            // Here you would typically send the data to your server
            console.log('Worker Signup:', formData);
            
            // Show success message
            alert('Worker account created successfully! Please login.');
            bootstrap.Modal.getInstance(document.getElementById('workerSignupModal')).hide();
            workerSignupForm.reset();
        });
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-success');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.remove('bg-success');
        navbar.classList.add('bg-transparent');
    }
});

// Form Validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Add validation to email inputs
document.querySelectorAll('input[type="email"]').forEach(input => {
    input.addEventListener('blur', function() {
        if (!validateEmail(this.value)) {
            this.classList.add('is-invalid');
            this.nextElementSibling?.classList.add('invalid-feedback');
        } else {
            this.classList.remove('is-invalid');
            this.nextElementSibling?.classList.remove('invalid-feedback');
        }
    });
});

// Date Input Validation
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    dateInput.addEventListener('change', function() {
        if (this.value < today) {
            alert('Please select a future date');
            this.value = '';
        }
    });
}

// Tracking Form Handling
const trackForm = document.getElementById('trackForm');
const trackingStatus = document.getElementById('trackingStatus');
const timelineItems = document.querySelectorAll('.timeline-item');

if (trackForm) {
    trackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trackingId = document.getElementById('trackingId').value;
        
        // Show tracking status section
        trackingStatus.classList.remove('d-none');
        
        // Simulate tracking status (in a real application, this would come from a server)
        const status = Math.floor(Math.random() * 4); // Random status for demo
        
        // Reset all timeline items
        timelineItems.forEach(item => item.classList.remove('active'));
        
        // Activate timeline items up to the current status
        for (let i = 0; i <= status; i++) {
            timelineItems[i].classList.add('active');
        }
        
        // Scroll to tracking status
        trackingStatus.scrollIntoView({ behavior: 'smooth' });
    });
}

// Camera and Image Upload Functionality
let stream = null;
const cameraContainer = document.getElementById('cameraContainer');
const camera = document.getElementById('camera');
const openCameraBtn = document.getElementById('openCamera');
const captureImageBtn = document.getElementById('captureImage');
const uploadImageBtn = document.getElementById('uploadImage');
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const preview = document.getElementById('preview');
const removeImageBtn = document.getElementById('removeImage');

// Open Camera
openCameraBtn.addEventListener('click', async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        camera.srcObject = stream;
        cameraContainer.classList.remove('d-none');
        openCameraBtn.disabled = true;
    } catch (err) {
        console.error('Error accessing camera:', err);
        alert('Error accessing camera. Please make sure you have granted camera permissions.');
    }
});

// Capture Image
captureImageBtn.addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    canvas.width = camera.videoWidth;
    canvas.height = camera.videoHeight;
    canvas.getContext('2d').drawImage(camera, 0, 0);
    
    // Convert to base64
    const imageData = canvas.toDataURL('image/jpeg');
    preview.src = imageData;
    
    // Stop camera stream
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    
    // Show preview and hide camera
    cameraContainer.classList.add('d-none');
    imagePreview.classList.remove('d-none');
    openCameraBtn.disabled = false;
});

// Upload Image
uploadImageBtn.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            imagePreview.classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    }
});

// Remove Image
removeImageBtn.addEventListener('click', () => {
    preview.src = '';
    imagePreview.classList.add('d-none');
});

// Form Submission
document.getElementById('scheduleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    // Add image data if available
    if (preview.src) {
        formData.append('wasteImage', preview.src);
    }
    
    try {
        // Here you would typically send the formData to your server
        // For now, we'll just show a success message
        alert('Pickup scheduled successfully! You will receive a confirmation email with your tracking ID.');
        e.target.reset();
        imagePreview.classList.add('d-none');
    } catch (err) {
        console.error('Error submitting form:', err);
        alert('Error scheduling pickup. Please try again.');
    }
});

// Tracking Form
document.getElementById('trackForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const trackingId = document.getElementById('trackingId').value;
    
    // Show tracking status (mock data for demonstration)
    document.getElementById('trackingStatus').classList.remove('d-none');
}); 
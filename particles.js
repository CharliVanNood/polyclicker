const particleCanvas = document.getElementById("particles")
const particleCtx = particleCanvas.getContext("2d")

particles = []

pushDuration = 100

function updateScreenSize() {
    particleCanvas.width = window.innerWidth / 100 * 30
    particleCanvas.height = window.innerHeight
}

function drawParticle(color, x, y, size) {
    particleCtx.fillStyle = color
    particleCtx.fillRect(x + particleCanvas.width / 2, y + particleCanvas.height / 2, 10 * size, 10 * size)
}

function DrawParticles() {
    updateScreenSize()
    for (let particle_ = 0; particle_ < particles.length; particle_++) {
        let particle = particles[particle_]
        if (particle[3] < pushDuration) {
            particle[1] += Math.min(Math.max(particle[5], -1), 1) * 30 / (particle[3] / 1.7)
            particle[2] += Math.min(Math.max(particle[6], -1), 1) * 30 / (particle[3] / 1.7)
            particle[3] += 1
        }
        particle[4] += 0.3
        particle[2] += particle[4]
        drawParticle(particle[0], particle[1], particle[2], particle[7])
    }
    particles_ = []
    for (let particle_ = 0; particle_ < particles.length; particle_++) {
        let particle = particles[particle_]
        if (particle[2] < window.innerHeight) {
            particles_.push(particle)
        }
    }
    particles = particles_
}

function createParticles(amount) {
    for (x = 0; x < amount; x++) {
        if (Math.random() > 0.5) {
            particles.push(["#8c370f", 0, 0, 1, 0, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2])
        } else {
            particles.push(["#9e4f13", 0, 0, 1, 0, Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2])
        }
    }
}


import heroImage from '../../assets/hero.png'
import googleLogo from '../../assets/google.svg'
import facebookLogo from '../../assets/facebook.svg'
import styles from './Login.module.css'

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.loginCard}>
        <div className={styles.hero}>
          <img
            src={heroImage}
            alt="Botanical leaf illustration"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.formPanel}>
        <h1 className={styles.heading}>
  <span className={styles.hello}>Hello,</span>{' '}
  <span className={styles.guyss}>Guyss!</span>
</h1>

          <div className={styles.tabs}>
            <button className={styles.activeTab} type="button">
              Login
            </button>
            <button className={styles.inactiveTab} type="button">
              Sign Up
            </button>
          </div>

          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
           
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

           
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <div className={styles.formOptions}>
              <label className={styles.remember}>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#forgot-password">Forgot Password?</a>
            </div>

            <button className={styles.loginButton} type="submit">
              Login
            </button>
          </form>

          <div className={styles.divider}>
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          
<div className={styles.socialButtons}>
  <button type="button" aria-label="Google">
    <img src={googleLogo} alt="Google" />
  </button>

  <button type="button" aria-label="Facebook">
    <img src={facebookLogo} alt="Facebook" />
  </button>
</div>


          <p className={styles.signupText}>
            Don't have an account? <a href="#signup">Sign Up</a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login

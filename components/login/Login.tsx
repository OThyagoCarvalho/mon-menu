import { ThemeContext, useTheme } from '@emotion/react';
import {
    Button,
    Checkbox,
    Container,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    TextField,
    Link as MuiLink
} from '@mui/material';
import Link from 'next/link';
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import styles from '../../styles/Login.module.scss';

export default function LoginComponent() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <h1> Mon Menu</h1>
                <div>
                    <p>Entre ou</p>
                    <MuiLink color="primary" underline="hover" href="#">Crie sua Conta Gratuitamente</MuiLink>
                </div>
            </div>
            <Paper className={styles.innerContainer} elevation={6}>
                <TextField
                    className={styles.textInputField}
                    id="email"
                    label="email"
                    variant="outlined"
                />
                <TextField
                    className={styles.textInputField}
                    id="password"
                    label="senha"
                    variant="outlined"
                    type="password"
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                        Password
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        // type={values.showPassword ? 'text' : 'password'}
                        type="password"
                        // value={values.password}
                        // onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                >
                                    <MdVisibility />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className={styles.rememberMeWrapper}>
                    <div className={styles.rememberMeGroup}>
                        <Checkbox
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                        />
                        <span> Lembrar de mim</span>
                    </div>
                    <div className={styles.forgotPassword}>
                        <Link href="#">
                            <MuiLink color="primary" underline="hover">
                                Esqueceu sua senha?
                            </MuiLink>
                        </Link>
                    </div>
                </div>
                <Button variant="contained"> <Link href="/dashboard/1"> Entrar </Link></Button>
                <div className={styles.socialLoginWrapper}>
                    <span> Ou entre com suas redes sociais</span>
                    <div className={styles.socialButtonsWrapper}>
                        <button>
                            <BsGoogle />
                        </button>
                        <button>
                            <BsFacebook />
                        </button>
                        <button>
                            <BsApple />
                        </button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

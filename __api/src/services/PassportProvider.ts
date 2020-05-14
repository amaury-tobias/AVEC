/* eslint-disable @typescript-eslint/camelcase */
import jwt from 'jsonwebtoken'
import { Strategy as LocalStrategy } from 'passport-local'
import {
  Strategy as JWTStrategy,
  StrategyOptions,
  ExtractJwt,
  VerifiedCallback,
} from 'passport-jwt'
import { Request } from 'koa'

const JWT_ALGORITHM = 'RS256'
const TOKEN_TYPE = 'Bearer'
const TOKEN_EXPIRES_IN = '30d'

export class PassportProvider {
  private static secret: Buffer
  private static cert: Buffer

  constructor() {
    throw new Error('No create instance of PassportProvider class')
  }

  private static jwtOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromAuthHeaderAsBearerToken(),
      (req) => {
        const cookieHeader = req.headers.cookie
        const cookie: { [key: string]: string } = {}
        const cookies = cookieHeader?.split(';')
        cookies?.map((ck) => {
          const crumbs = ck.split('=')
          cookie[crumbs[0]?.trim()] = crumbs[1]?.trim()
        })
        return cookie?.['auth._token.local']?.split('%20')?.[1]
      },
    ]),
    algorithms: [JWT_ALGORITHM],
    secretOrKeyProvider: (
      _req: Request,
      _rawToken: string,
      done: VerifiedCallback
    ) => done(undefined, PassportProvider.cert),
  }

  static initialize(params: { secret: Buffer; cert: Buffer }) {
    PassportProvider.secret = params.secret
    PassportProvider.cert = params.cert
  }

  static localStrategy = new LocalStrategy((username, password, done) => {
    const jwtData = {
      username: 'mock',
      token_type: TOKEN_TYPE,
      expires_in: TOKEN_EXPIRES_IN,
    }

    const token = jwt.sign(jwtData, PassportProvider.secret, {
      algorithm: JWT_ALGORITHM,
      expiresIn: TOKEN_EXPIRES_IN,
    })
    done(undefined, { token })
  })

  static jwtStrategy = new JWTStrategy(
    PassportProvider.jwtOptions,
    (payload, done) => done(undefined, payload)
  )
}

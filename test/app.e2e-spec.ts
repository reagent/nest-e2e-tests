import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { application } from '../src/application';

describe('AppController (e2e)', () => {
  let app:INestApplication

  describe('using testing module fixture', () => {
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication();
      await app.init();
    });

    describe('POST / with an empty body', () => {
      it("returns a successful empty response", () => {
        return request(app.getHttpServer())
          .post("/")
          .set('Accept', 'application/json')
          .send({})
          .expect(201)
          .then(response => {
            expect(response.body).toEqual({})
          })
      })
    })
  })

  describe('using bootstrapped app', () => {
    beforeAll(async () => {
      app = await application()
      await app.init()
    });

    describe('POST / with an empty body', () => {
      it("returns a 400 error", () => {
        return request(app.getHttpServer())
          .post('/')
          .set('Accept', 'application/json')
          .send({})
          .expect(400)
          .then(response => {
            expect(response.body).toEqual({
              error: 'Bad Request',
              statusCode: 400,
              message: [
                {
                  children: [],
                  constraints: {
                    isNotEmpty: 'name should not be empty'
                  },
                  property: 'name',
                  target: {}
                }
              ]
            })
        })
      })
    })
  })
});

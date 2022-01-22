import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.useGlobalPipes(new ValidationPipe())

    const config = new DocumentBuilder()
        .setTitle('Task API')
        .setDescription('API For Task App')
        .setVersion('1.0')
        .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/', app, document)

    const port = process.env.PORT || 3000;
    await app.listen(port)
}
bootstrap()

// https://towardsdev.com/how-to-deploy-a-nestjs-app-to-aws-elastic-beanstalk-with-added-https-and-ci-cd-2d35c319e9f4
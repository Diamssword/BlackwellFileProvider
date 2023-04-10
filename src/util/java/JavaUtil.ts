export class JavaUtil {

    public static getJavaExecutable(): string {
        console.log(process.env.JAVA_EXECUTABLE)
        return process.env.JAVA_EXECUTABLE as string
    }

}

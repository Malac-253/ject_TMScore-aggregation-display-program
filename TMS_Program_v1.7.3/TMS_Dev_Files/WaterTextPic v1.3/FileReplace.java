import java.util.ArrayList; // import the ArrayList class 
import java.awt.Font;// For setting font of the watermark text
import java.awt.Graphics; 
import java.awt.image.BufferedImage;
import java.io.BufferedWriter; 
import java.io.Writer;
import java.io.File; 
import java.io.FileWriter;
import java.lang.*;
import java.io.IOException; 
import javax.imageio.ImageIO; 
import java.util.Scanner;  // Import the Scanner class
import java.lang.Object;
import java.awt.Component;
import java.awt.Container;
import javax.swing.JComponent;
import javax.swing.JOptionPane;
import javax.swing.*;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.nio.file.Files;
import java.io.OutputStream;
import java.io.PrintWriter;

   public class FileReplace 
   { 

      public String callFileinput() 
      {
         //vars
         String linenum_needed = null;String line2 = null;String line3 = null;int result = 00;File f1 = null;
         File f2 = null;FileReader fr1 = null;FileReader fr2 = null;FileWriter fw = null;BufferedReader br1 = null;
         BufferedReader br2 = null;BufferedWriter bw = null;     
         try {//Get File 1
            f1 = new File("Tester.txt");//System.out.println ("1 - File Opened: Tester.txt");
            f2 = new File("Tester2.txt");//System.out.println ("2 - File Opened: Tester2.txt");
            fr1 = new FileReader(f1);
            fr2 = new FileReader(f2);
            br1 = new BufferedReader(fr1);
            br2 = new BufferedReader(fr2);
            }catch(Exception e){System.out.println("Respone not recive from file - Error 1-");System.out.print(e);}           
         try {//Read line 1
            linenum_needed = br2.readLine();//System.out.println ("2 - Line# needed :" + linenum_needed);
            }catch(Exception e){System.out.println("Respone not recive from file - Error 2-");System.out.print(e);}  
         try {//line 1 to integer object          
            result = ((Integer.parseInt(linenum_needed))-1);//System.out.println ("3 - Result:" + result);
            }catch(Exception e){System.out.println("Respone not recive from file - Error 3-");System.out.print(e);}         
         try {//Getting the needed line
            int i = 0;
            while (i <= (result))
            {line2 = br1.readLine();
               //System.out.println("4 - Line On :" + line2); 
               //System.out.println("5 - Line # :" + i);
               //if(i==result){System.out.println ("6 - :" + line2);}
               i++;}
            }catch(Exception e){System.out.println("Respone not recive from file - Error 4");System.out.println(e);} 
         try {//Close used files  
            fr1.close();br1.close();fr2.close();br2.close();
            //System.out.println ("7 - File Closed: Tester1.txt");
            //System.out.println ("8 - File Closed: Tester2.txt");
            }catch(Exception e){System.out.println("Respone not recive from file - Error 5");System.out.println(e);}               
         try {//editing num
            f2 = new File("Tester2.txt");//System.out.println ("9 - File Opened: Tester2.txt");
            fr1 = new FileReader(f2);br1 = new BufferedReader(fr1);
            line3 = br1.readLine();//System.out.println ("10 - Line#needed edit :" + line3);
            br1.close();
            fw = new FileWriter(f2);bw = new BufferedWriter(fw);
            bw.write(new Integer((result+2)).toString());bw.flush();bw.close();//System.out.println ("11 - done"); 
            }catch(Exception e){System.out.println("Respone not recive from file - Error 6");System.out.println(e);}     
       return line2;
      }
      public static void callFileinputReset() 
      {
         //vars
         File f2 = null;FileReader fr1 = null;FileReader fr2 = null;FileWriter fw = null;BufferedReader br1 = null;
         BufferedReader br2 = null;BufferedWriter bw = null; 
         try {//try reset
            f2 = new File("Tester2.txt");
            fw = new FileWriter(f2);bw = new BufferedWriter(fw);
            bw.write("1");bw.flush();bw.close();
         }catch(Exception e){System.out.println("Respone not recive from file - Error 6");System.out.println(e);}
      
      }
    public static void main(String args[]) {
    
        FileReplace fr = new FileReplace();
        callFileinputReset();
        String just = fr.callFileinput();
        System.out.println(just);
        just = fr.callFileinput();
        System.out.println(just);
        just = fr.callFileinput();
        System.out.println(just);
        callFileinputReset();
        just = fr.callFileinput();
        System.out.println(just); 
    }
}

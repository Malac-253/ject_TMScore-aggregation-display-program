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
public class textmarktester 
{ 
	public static void main(String[] args) 
   {
      System.out.println("Tester Program");//Unit Tester
         System.out.println("----Program 0");//Unit Tester part 1
         callFileinputReset();
         
         thread thread_1_1 = new thread("1.1");
         thread_test(thread_1_1,true,("1.1"));
         
         
         //comment_test(thread_1_1.Thread_Node,true,"AAA001","Program 0Test00",thread_1_1.Thread_Node,
                                                                  //thread_1_1.Thread_Node,null,null,0);
         

         
         
           
        
    
            
           
            
     
   
   
   
   }
      
   public static boolean thread_test(thread tester,boolean state,String tname)
   {
      assert (state=!(tester==null)): "incorrect thread state";
      assert (0 == (tester.name.compareTo(tname))): "incorrect thread name";
      System.out.println("----Thread Passed");
      return true;   
   } 
   public static boolean comment_test(Comment tester,boolean state,String Rtag,String Rcomment,Comment Rlead,
                                       Comment Rthread,Comment per,Comment next,int Rlevel)
   {
      assert (state=!(tester==null)):"incorrect comment state";
      assert (0 == (tester.comment.compareTo(Rcomment))): "incorrect comment text";
      assert (0 == (tester.tag.compareTo(Rtag))): "incorrect comment tag";
      assert comparecomment(tester.Lead, Rlead): "incorrect Lead Comment";
      assert comparecomment(tester.Thread, Rthread): "incorrect Thread Comment";
      assert comparecomment(tester.PerVcomment, per): "incorrect per Comment";
      assert comparecomment(tester.Nextcomment, next): "incorrect next Comment";
      assert (tester.level == Rlevel): "incorrect Comment level";
      System.out.println("----Comment Passed");
      return true; 
   }
   public static boolean comparecomment(Comment one, Comment two)
   {
      if((one == null) & (two == null)){return true;}
      else{
      if((0 == (one.tag.compareTo(two.tag)))&((0 == one.comment.compareTo(two.comment)))) {return true;}}
      return false;  
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
}

    

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

public class Comment
{
   //test Helper
   BufferedReader bufferedReader = null;
   RandomAccessFile randomAccessFile = null;
   String currLine;
   String needs;
   String line_num;
   //Main
   String tag;
   String comment;
   int char_count;
   int level;
   Comment NewLead =null;
   Comment Thread =null;
   Comment Lead =null;
   Comment Helper;
   Comment PerVcomment;
   Comment Nextcomment=null;   
   ArrayList<Comment> relpys_to_comment = new ArrayList<Comment>(); // Create an ArrayList object
   
   //Construstor
//    public Comment(Comment Lead,Comment Thread,Comment PerVcomment,Comment Nextcomment,int level)
//    {
//       Scanner tagLine = new Scanner(System.in);System.out.println("tag?"); 
//       tag = tagLine.nextLine(); 
//       Scanner comment_text = new Scanner(System.in);System.out.println("Comment?"); 
//       comment = comment_text.nextLine(); 
//       
//       this.tag = tag;this.comment = comment;this.Lead = Lead;this.Thread=Thread;
//       this.Nextcomment=Nextcomment; this.level=level; this.PerVcomment=PerVcomment;
//    } 
   public Comment(Comment Lead,Comment Thread,Comment PerVcomment,Comment Nextcomment,int level)
   {
      
      System.out.println("What is the tag?"); 
      tag = callFileinput(); 
      System.out.println("--> :"+ tag);
      System.out.println("What is the Comment?");
      comment = callFileinput(); 
      System.out.println("--> :"+ comment);   
      this.tag = tag;this.comment = comment;this.Lead = Lead;this.Thread=Thread;
      this.Nextcomment=Nextcomment; this.level=level; this.PerVcomment=PerVcomment;
      
   } 
   
   
   public void addNewreply(Comment comment_to_add,Comment comment_old)//new Comment 1 level down
   {
      comment_to_add.Lead=(comment_old);
      comment_old.relpys_to_comment.add(comment_to_add);
      addaction(comment_to_add);
   }
   public void addNewcomment(Comment comment_to_add,Comment comment_old)//new Comment same Level
   {
      comment_old.Nextcomment=comment_to_add;
      comment_to_add.PerVcomment=comment_old;
      addaction(comment_to_add);
   }
   public void addLeveledcomment(Comment comment_to_add,Comment comment_old)//new Comment 1 Level up
   {
      comment_old.Lead.Nextcomment=comment_to_add;
      comment_to_add.PerVcomment=comment_old.Lead.
      addaction(comment_to_add);
   } 
   public void addLead(Comment comment_old)//new Comment at top level
   {
      NewLead = new Comment(NewLead,comment_old.Thread,comment_old,null,1);
      comment_old.Thread.relpys_to_comment.add(NewLead);
      addaction(NewLead);
   }
   public Comment addaction(Comment comment_on)
   {
      //Scanner Options = new Scanner(System.in);
      System.out.println("1=New LeadComment \n 2=Newreply \n 3=addComment \n 4=BackLevel \n 5=Done"); 
      String option = callFileinput();
      System.out.println("--> :"+ option);
      //String Option = Options.nextLine();
      switch(option) 
      {
         case "1"://new Lead comment
            addLead(comment_on.Lead);
            break;
         case "2"://new Comment 1 level down
            comment_on.addNewreply(new Comment(comment_on,comment_on.Thread,null,null,(comment_on.level+1)),comment_on);    
            break;
         case "3"://new Comment same Level
            comment_on.addNewcomment(new Comment(comment_on.Lead,comment_on.Thread,comment_on,null,comment_on.level),comment_on);
            break;
         case "4"://new Comment 1 level up
            comment_on.addLeveledcomment(new Comment(comment_on.Lead.Lead,comment_on.Thread,null,null,(comment_on.level-1)),comment_on);
            break;   
         case "5":
            System.out.println("Done---"); 
            break;
         } 
      return comment_on;  
             
   }
   
   
   //Getters
   public String getTag(){return tag;}
   public String getComment(){return comment;}
   public int getChar_count(){return char_count;}
   public Comment getLead(){return Lead;}
   public Comment getThread(){return Thread;}
   public Comment getNextcomment(){return Nextcomment;}
  
  
  
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
         }catch(Exception e){System.out.println("Error 3-");System.out.print(e);}         
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
}
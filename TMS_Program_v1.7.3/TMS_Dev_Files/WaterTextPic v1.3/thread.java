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
import java.io.PrintWriter;;
public class thread 
{
   String name;
   Comment Thread_Node =null; 
   //Construstor
   public thread(String Rname)
   {
      //(Comment Lead,Comment Thread,Comment PerVcomment,Comment Nextcomment,int level)
      Thread_Node = new Comment(Thread_Node,Thread_Node,null,null,0);
      this.name = Rname;     
      Thread_Node.addaction(Thread_Node);
   }
   
   //methods
   public Comment getThreadNode()
   {      
      return Thread_Node;
   } 
   
} 
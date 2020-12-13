package com.example.crud;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @author Deepshikha
 *
 */
@Controller
public class CrudController {
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}

}

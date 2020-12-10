package com.example.crud;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrudController {
	
	@RequestMapping("/")
	public String index() {
		return "hello to springboot";
	}

}

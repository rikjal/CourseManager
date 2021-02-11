package com.courses.coursemanager.services;

import java.util.List;

import com.courses.coursemanager.dao.CourseDao;
import com.courses.coursemanager.entities.Course;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {
    @Autowired
    private CourseDao courseDao;

    @Override
    public List<Course> getCourses() {
        return this.courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        return courseDao.getOne(courseId);
    }

    @Override
    public Course addCourse(Course course) {
        return this.courseDao.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseDao.save(course);
    }

    @Override
    public void deleteCourse(long parseLong) {
        Course entity = courseDao.getOne(parseLong);
        this.courseDao.delete(entity);
    }

    public CourseServiceImpl(CourseDao courseDao) {
        super();
    }
}

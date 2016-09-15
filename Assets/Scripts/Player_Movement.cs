using UnityEngine;
using System.Collections;

public class Player_Movement : MonoBehaviour
{

    Animator animator;
    public float speed;
    public int weapon = 0;


    // Use this for initialization
    void Start()
    {
        animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {

        if(weapon == 0)
        {
            animator.SetBool("Knife", true);
        }


        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");


        if (h != 0 || v != 0)
        {
            animator.SetBool("IsMoving", true);
        }
        else
        {
            animator.SetBool("IsMoving", false);
        }


        transform.position = transform.position + Vector3.up * v * speed * Time.deltaTime;
        transform.position = transform.position + Vector3.right * h * speed * Time.deltaTime;

        var mouse = Input.mousePosition;
        var screenPoint = Camera.main.WorldToScreenPoint(transform.localPosition);
        var offset = new Vector2(mouse.x - screenPoint.x, mouse.y - screenPoint.y);
        var angle = Mathf.Atan2(offset.y, offset.x) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(0, 0, angle);

        if (Input.GetMouseButtonDown(0))
        {
            animator.SetTrigger("IsAttacking");
        }

       
    }

 }


